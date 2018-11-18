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
import { AuthService } from '../../providers/auth.Service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(afService, router, fb) {
        this.afService = afService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    };
    LoginComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.afService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/usuario']);
        });
    };
    LoginComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.afService.doTwitterLogin()
            .then(function (res) {
            _this.router.navigate(['/usuario']);
        });
    };
    LoginComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.afService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/usuario']);
        });
    };
    LoginComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.afService.doLogin(value)
            .then(function (res) {
            _this.router.navigate(['/usuario']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [AuthService,
            Router,
            FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map