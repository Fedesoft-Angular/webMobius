import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var M:any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    //M.AutoInit();
  }

  ngAfterViewInit() {
    $(document).ready(function(){
      $('.slider').slider();
    });
    // var instance = M.Carousel.init({
    //   fullWidth: true,
    //   indicators: true
    // });
  }

}
