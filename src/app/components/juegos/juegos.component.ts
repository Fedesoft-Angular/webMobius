import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { juego} from "../../models/juego"

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(private http: HttpClient) { }
  JuegoArray: object;

  ngOnInit():void {
    this.http.get<juego>('https://mobiusdb-2018.herokuapp.com:3000/api/juegos').subscribe(
      data => {
        
        this.JuegoArray = data;
        
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Error al consumir el servicio.');
        }
        else {
          console.log('Error local');
        }
      })

      console.log(this.JuegoArray);
  }

  MM_openBrWindow(theURL,winName,features) { //v2.0
    window.open(theURL,winName,features);
  }

}
