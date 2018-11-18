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
import { UserService } from '../../providers/user.service';
import { AuthService } from '../../providers/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../../providers/user.model';
var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(userService, authService, route, location, fb) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.user = new FirebaseUserModel();
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.user = data;
                _this.createForm(_this.user.name);
            }
        });
    };
    UsuarioComponent.prototype.createForm = function (name) {
        this.profileForm = this.fb.group({
            name: [name, Validators.required]
        });
    };
    UsuarioComponent.prototype.save = function (value) {
        this.userService.updateCurrentUser(value)
            .then(function (res) {
            console.log(res);
        }, function (err) { return console.log(err); });
    };
    UsuarioComponent.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.location.back();
        }, function (error) {
            console.log("Logout error", error);
        });
    };
    UsuarioComponent = __decorate([
        Component({
            selector: 'app-usuario',
            templateUrl: './usuario.component.html',
            styleUrls: ['./usuario.component.css']
        }),
        __metadata("design:paramtypes", [UserService,
            AuthService,
            ActivatedRoute,
            Location,
            FormBuilder])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
export { UsuarioComponent };
//# sourceMappingURL=usuario.component.js.map