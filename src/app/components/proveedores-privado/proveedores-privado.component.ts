import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-proveedores-privado',
  templateUrl: './proveedores-privado.component.html',
  styleUrls: ['./proveedores-privado.component.css']
})
export class ProveedoresPrivadoComponent implements OnInit {

  nombrets: string;
  telefonots: string;
  correots: string;
  logots: string;
  usuariots: string;
  clavets: string;
  puntajets: number;
  premiots: string;
  descripcionts: string;
  estadots: number;

  constructor(private usuarioService: UsuarioService,private router: Router,private http: HttpClient) { }

  ngOnInit() {
    var currentUser = this.usuarioService.getUserLoggedIn();
    if (currentUser == null) {
      this.router.navigateByUrl('');
    }
  }

  guardar(){
    
    var result = this.http.post('https://mobiusdb-2018.herokuapp.com/api/proveedores', {
      Nombre: this.nombrets,
      Telefono: this.telefonots,
      Correo : this.correots,
      Logo : this.logots,
      Usuario : this.usuariots,
      Clave : this.clavets,
      PuntajePremio : this.puntajets,
      DescripicionPremio: this.descripcionts,
      FechaCreacion : new Date().getTimezoneOffset(),
      FechaModificacion : new Date().getTimezoneOffset(),
      Estado : this.estadots
      
    }).subscribe(
      data =>{
        if(data[0].success){
          
        }
      },
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error){
          console.log('Error al consumir el servicio.');
        }
        else{
          console.log('Error local');
        }          
      }

    ) ;  
  }

}
