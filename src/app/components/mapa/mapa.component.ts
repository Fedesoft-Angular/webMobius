import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat: number = 4.7021569;
  lng: number = -74.1323937;
  constructor() { }

  ngOnInit() {
  }

}
