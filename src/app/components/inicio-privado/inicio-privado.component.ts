import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-privado',
  templateUrl: './inicio-privado.component.html',
  styleUrls: ['./inicio-privado.component.css']
})
export class InicioPrivadoComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,private router: Router) { }

  ngOnInit() {
    var currentUser = this.usuarioService.getUserLoggedIn();
    console.log(currentUser);
    if (currentUser == null) {
      this.router.navigateByUrl('');
    }
  }

}
