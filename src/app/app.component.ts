import { Component, OnInit } from '@angular/core';
import { menu } from "./models/menu";
import { LoginService } from './services/login.service'
import { Usuario } from './models/usuario.model';
import { UsuarioService } from './services/usuario.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms'
import { HttpErrorResponse } from "@angular/common/http";
declare var $: any;
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Möbius';
  menuPublico: menu[];
  menuPrivado: menu[];
  menuExterno: menu[];
  usuarioTs: string;
  claveTs: string;
  login: boolean;
  constructor(private loginService: LoginService, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    this.menuPublico = this.cargarMenu();
  }
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.sidenav').sidenav();
    });

  }

  logIn() {
    this.loginService.login(this.usuarioTs, this.claveTs).subscribe(
      res => {
        if (res != null) {
          //console.log(res[0].Nombre);
          if (res[0].Nombre == "Admin") {
            let u: Usuario = { username: res[0].Nombre };
            this.usuarioService.setUserLoggedIn(u);
            this.login = true;
            this.menuPublico = this.cargarMenu();
            this.navigate("");
          }
        }

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Error al consumir el servicio.');
        }
        else {
          console.log('Error local');
        }
      }
    );

  }

  logOut() {
    this.login = false;
    this.usuarioService.getUserLoggedOut();
    this.menuPublico = this.cargarMenu();
    this.navigate("");
  }

  navigate(ruta: string) {
    this.router.navigateByUrl(ruta);
  }

  cargarMenu() {
    var currentUser = this.usuarioService.getUserLoggedIn();
    if (currentUser == null) {
      this.login = false;
      this.menuExterno = [{ "Nombre": "Juegos", "Path": "/juegos" }
        , { "Nombre": "Retos", "Path": "/retos" }
        , { "Nombre": "Concursos", "Path": "/concursos" }
        , { "Nombre": "Educación", "Path": "/educacion" }
        , { "Nombre": "Puntos", "Path": "/mapa" }
      ];
      this.menuPublico = this.menuExterno;
    }
    else {
      this.login = true;
      this.menuPrivado = [{ "Nombre": "Retos", "Path": "/userRetos" }
        , { "Nombre": "Proveedores", "Path": "/userProveedor" }
      ];
      this.menuPublico = this.menuPrivado;
    }
    return this.menuPublico;
  }
}


