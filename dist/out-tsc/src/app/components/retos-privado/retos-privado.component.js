var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
var RetosPrivadoComponent = /** @class */ (function () {
    function RetosPrivadoComponent(usuarioService, router, http) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.http = http;
    }
    RetosPrivadoComponent.prototype.ngOnInit = function () {
        var currentUser = this.usuarioService.getUserLoggedIn();
        if (currentUser == null) {
            this.router.navigateByUrl('');
        }
    };
    RetosPrivadoComponent.prototype.Guardar = function () {
        return this.http.post('http://localhost:3000/api/retos', {
            Nombre: this.nombre,
            Descripcion: this.descripcion,
            FechaInicio: this.fechaInicio,
            FechaFin: this.fechaFin,
            Puntaje: this.puntaje,
            Estado: this.estado,
            Url: this.url
        });
    };
    RetosPrivadoComponent = __decorate([
        Component({
            selector: 'app-retos-privado',
            templateUrl: './retos-privado.component.html',
            styleUrls: ['./retos-privado.component.css']
        }),
        __metadata("design:paramtypes", [UsuarioService, Router, HttpClient])
    ], RetosPrivadoComponent);
    return RetosPrivadoComponent;
}());
export { RetosPrivadoComponent };
//# sourceMappingURL=retos-privado.component.js.map