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
var RegistrarComponent = /** @class */ (function () {
    function RegistrarComponent(afService, router, fb) {
        this.afService = afService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.successMessage = '';
        this.createForm();
    }
    RegistrarComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    };
    RegistrarComponent.prototype.ngOnInit = function () {
    };
    RegistrarComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.afService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) { return console.log(err); });
    };
    RegistrarComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.afService.doTwitterLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) { return console.log(err); });
    };
    RegistrarComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.afService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/user']);
        }, function (err) { return console.log(err); });
    };
    RegistrarComponent.prototype.tryRegister = function (value) {
        var _this = this;
        this.afService.doRegister(value)
            .then(function (res) {
            console.log(res);
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created";
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    RegistrarComponent = __decorate([
        Component({
            selector: 'app-registrar',
            templateUrl: './registrar.component.html',
            styleUrls: ['./registrar.component.css']
        }),
        __metadata("design:paramtypes", [AuthService,
            Router,
            FormBuilder])
    ], RegistrarComponent);
    return RegistrarComponent;
}());
export { RegistrarComponent };
//# sourceMappingURL=registrar.component.js.map