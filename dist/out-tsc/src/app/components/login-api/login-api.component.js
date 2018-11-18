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
import { LoginService } from '../../services/login.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
var LoginApiComponent = /** @class */ (function () {
    function LoginApiComponent(loginService, usuarioService, router) {
        this.loginService = loginService;
        this.usuarioService = usuarioService;
        this.router = router;
        this.login = false;
    }
    LoginApiComponent.prototype.ngOnInit = function () {
        var currentUser = this.usuarioService.getUserLoggedIn();
        if (currentUser != null) {
            this.login = true;
        }
        else {
            this.login = false;
        }
    };
    LoginApiComponent.prototype.logIn = function () {
        var _this = this;
        event.preventDefault(); // Avoid default action for the submit button of the login form
        // Calls service to login user to the api rest
        this.loginService.login(this.usuarioTs, this.claveTs).subscribe(function (res) {
            if (res != null) {
                console.log(res[0].Nombre);
                var u = { username: res[0].Nombre };
                _this.usuarioService.setUserLoggedIn(u);
                _this.login = true;
            }
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Error al consumir el servicio.');
            }
            else {
                console.log('Error local');
            }
        }, function () { return _this.navigate("userInicio"); });
    };
    LoginApiComponent.prototype.logOut = function () {
        this.login = false;
        this.usuarioService.getUserLoggedOut();
        this.navigate("inicio");
    };
    LoginApiComponent.prototype.navigate = function (ruta) {
        this.router.navigateByUrl(ruta);
    };
    LoginApiComponent = __decorate([
        Component({
            selector: 'app-login-api',
            templateUrl: './login-api.component.html',
            styleUrls: ['./login-api.component.css']
        }),
        __metadata("design:paramtypes", [LoginService, UsuarioService, Router])
    ], LoginApiComponent);
    return LoginApiComponent;
}());
export { LoginApiComponent };
//# sourceMappingURL=login-api.component.js.map