import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-retos-privado',
  templateUrl: './retos-privado.component.html',
  styleUrls: ['./retos-privado.component.css']
})
export class RetosPrivadoComponent implements OnInit {


  nombrets: string;
  descripcionts: string;
  fechaIniciots: string;
  fechaFints: string;
  puntajets: string;
  estadots: string;
  urlts: string;

  constructor(private usuarioService: UsuarioService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    var currentUser = this.usuarioService.getUserLoggedIn();

    if (currentUser == null) {
      this.router.navigateByUrl('');
    }
   
  }

  ngAfterViewInit() {
    $(document).ready(function(){
      $('.datepicker').datepicker({
      format: 'dd/mm/yyyy',
      monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      selectMonths: true,
      selectYears: 100, // Puedes cambiarlo para mostrar más o menos años
      today: 'Hoy',
      clear: 'Limpiar',
      close: 'Ok',
      labelMonthNext: 'Siguiente mes',
      labelMonthPrev: 'Mes anterior',
      labelMonthSelect: 'Selecciona un mes',
      labelYearSelect: 'Selecciona un año'});
    });
  }

  guardar() {
    debugger;
    
    var result = this.http.post('https://mobiusdb-2018.herokuapp.com/api/retos', {
      Nombre: this.nombrets,
      Descripcion: this.descripcionts,
      FechaInicio: this.stringToDate($('#fechaInicial').val(),"dd/MM/yyyy","/").getTimezoneOffset(),
      FechaFin: this.stringToDate($('#fechaFinal').val(),"dd/MM/yyyy","/").getTimezoneOffset(),
      Puntaje: this.puntajets,
      Estado: this.estadots,
      Url: this.urlts
    }).subscribe(
      data => {
        
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

  stringToDate(_date, _format, _delimiter) {
    var formatLowerCase = _format.toLowerCase();
    var formatItems = formatLowerCase.split(_delimiter);
    var dateItems = _date.split(_delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
    return formatedDate;
  }

}
