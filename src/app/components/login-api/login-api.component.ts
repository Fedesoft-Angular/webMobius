import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms'
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-login-api',
  templateUrl: './login-api.component.html',
  styleUrls: ['./login-api.component.css']
})
export class LoginApiComponent implements OnInit {

  usuarioTs: string;
  claveTs: string;
  login: boolean;
  constructor(private loginService: LoginService, private usuarioService: UsuarioService, private router: Router) {
    this.login = false;
  }



  ngOnInit() {

    var currentUser = this.usuarioService.getUserLoggedIn();
    if(currentUser != null)
    {
      this.login = true;
    }
    else
    {
      this.login = false;
    }
  }

  logIn() {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(this.usuarioTs, this.claveTs).subscribe(

      res => {
        if (res != null) {
          console.log(res[0].Nombre);
          let u: Usuario = { username: res[0].Nombre };
          this.usuarioService.setUserLoggedIn(u);
          this.login = true;
        }

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Error al consumir el servicio.');
        }
        else {
          console.log('Error local');
        }
      },
      () => this.navigate("userInicio")
    );

  }

  logOut() {
    this.login = false;
    this.usuarioService.getUserLoggedOut();
    this.navigate("inicio");

  }

  navigate(ruta : string ) {
    this.router.navigateByUrl(ruta);
  }

}
