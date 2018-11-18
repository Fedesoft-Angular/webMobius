import { Component, OnInit } from '@angular/core';
import { educativo} from "../../models/educativo";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
declare var $: any;
declare var M:any;

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor(private http: HttpClient) { }

  EducativoArray: object;


  ngOnInit() {
    M.AutoInit();


    this.http.get<educativo>('https://mobiusdb-2018.herokuapp.com/api/educativos').subscribe(
      data => {
        
        this.EducativoArray = data;
        
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Error al consumir el servicio.');
        }
        else {
          console.log('Error local');
        }
      })

      //console.log(this.EducativoArray);
  }
  

}
