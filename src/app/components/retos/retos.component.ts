import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Reto} from "../../models/reto"

@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.css']
})
export class RetosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  RetoArray: object;

  ngOnInit():void {
    this.http.get<Reto>('https://mobiusdb-2018.herokuapp.com/api/retos').subscribe(
      data => {
        
        this.RetoArray = data;
        
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Error al consumir el servicio.');
        }
        else {
          console.log('Error local');
        }
      })

      console.log(this.RetoArray);
  }

}
