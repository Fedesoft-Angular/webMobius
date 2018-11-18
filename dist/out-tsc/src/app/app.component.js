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
import { LoginService } from './services/login.service';
import { UsuarioService } from './services/usuario.service';
import { Router } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent(loginService, usuarioService, router) {
        this.loginService = loginService;
        this.usuarioService = usuarioService;
        this.router = router;
        this.title = 'Möbius';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.menuPublico = this.cargarMenu();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $('.sidenav').sidenav();
        });
    };
    AppComponent.prototype.logIn = function () {
        var _this = this;
        this.loginService.login(this.usuarioTs, this.claveTs).subscribe(function (res) {
            if (res != null) {
                //console.log(res[0].Nombre);
                if (res[0].Nombre == "Admin") {
                    var u = { username: res[0].Nombre };
                    _this.usuarioService.setUserLoggedIn(u);
                    _this.login = true;
                    _this.menuPublico = _this.cargarMenu();
                    _this.navigate("");
                }
            }
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Error al consumir el servicio.');
            }
            else {
                console.log('Error local');
            }
        });
    };
    AppComponent.prototype.logOut = function () {
        this.login = false;
        this.usuarioService.getUserLoggedOut();
        this.menuPublico = this.cargarMenu();
        this.navigate("");
    };
    AppComponent.prototype.navigate = function (ruta) {
        this.router.navigateByUrl(ruta);
    };
    AppComponent.prototype.cargarMenu = function () {
        var currentUser = this.usuarioService.getUserLoggedIn();
        if (currentUser == null) {
            this.login = false;
            this.menuExterno = [{ "Nombre": "Juegos", "Path": "/juegos" },
                { "Nombre": "Retos", "Path": "/retos" },
                { "Nombre": "Concursos", "Path": "/concursos" },
                { "Nombre": "Educación", "Path": "/educacion" },
                { "Nombre": "Puntos", "Path": "/mapa" }
            ];
            this.menuPublico = this.menuExterno;
        }
        else {
            this.login = true;
            this.menuPrivado = [{ "Nombre": "Retos", "Path": "/userRetos" },
                { "Nombre": "Proveedores", "Path": "/userProveedor" }
            ];
            this.menuPublico = this.menuPrivado;
        }
        return this.menuPublico;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [LoginService, UsuarioService, Router])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map