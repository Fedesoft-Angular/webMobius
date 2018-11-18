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
import { HttpClient } from "@angular/common/http";
var RetosComponent = /** @class */ (function () {
    function RetosComponent(http) {
        this.http = http;
    }
    RetosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:3000/api/retos').subscribe(function (data) {
            _this.RetoArray = data;
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Error al consumir el servicio.');
            }
            else {
                console.log('Error local');
            }
        });
        console.log(this.RetoArray);
    };
    RetosComponent = __decorate([
        Component({
            selector: 'app-retos',
            templateUrl: './retos.component.html',
            styleUrls: ['./retos.component.css']
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], RetosComponent);
    return RetosComponent;
}());
export { RetosComponent };
//# sourceMappingURL=retos.component.js.map