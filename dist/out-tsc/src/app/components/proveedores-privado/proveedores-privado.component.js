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
var ProveedoresPrivadoComponent = /** @class */ (function () {
    function ProveedoresPrivadoComponent(usuarioService, router, http) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.http = http;
    }
    ProveedoresPrivadoComponent.prototype.ngOnInit = function () {
        var currentUser = this.usuarioService.getUserLoggedIn();
        if (currentUser == null) {
            this.router.navigateByUrl('');
        }
    };
    ProveedoresPrivadoComponent.prototype.guardar = function () {
        console.log(this.nombrets);
        var result = this.http.post('http://localhost:3000/api/proveedores', {
            Nombre: this.nombrets,
            Telefono: this.telefonots,
            Correo: this.correots,
            Logo: this.logots,
            Usuario: this.usuariots,
            Clave: this.clavets,
            PuntajePremio: this.puntajets,
            DescripcionPremio: this.descripcionts
        }).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Error al consumir el servicio.');
            }
            else {
                console.log('Error local');
            }
        });
    };
    ProveedoresPrivadoComponent = __decorate([
        Component({
            selector: 'app-proveedores-privado',
            templateUrl: './proveedores-privado.component.html',
            styleUrls: ['./proveedores-privado.component.css']
        }),
        __metadata("design:paramtypes", [UsuarioService, Router, HttpClient])
    ], ProveedoresPrivadoComponent);
    return ProveedoresPrivadoComponent;
}());
export { ProveedoresPrivadoComponent };
//# sourceMappingURL=proveedores-privado.component.js.map