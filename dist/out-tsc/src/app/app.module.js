var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { LoginService } from './services/login.service';
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RetosComponent } from './components/retos/retos.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { ConcursosComponent } from './components/concursos/concursos.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { RedencionesComponent } from './components/redenciones/redenciones.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './providers/auth.guard';
import { UserService } from './providers/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginApiComponent } from './components/login-api/login-api.component';
import { UsuarioService } from './services/usuario.service';
import { RetosPrivadoComponent } from './components/retos-privado/retos-privado.component';
import { ProveedoresPrivadoComponent } from './components/proveedores-privado/proveedores-privado.component';
import { InicioPrivadoComponent } from './components/inicio-privado/inicio-privado.component';
var appRoutes = [
    { path: '', component: InicioComponent },
    { path: 'retos', component: RetosComponent },
    { path: 'juegos', component: JuegosComponent },
    { path: 'concursos', component: ConcursosComponent },
    { path: 'mapa', component: MapaComponent },
    { path: 'redenciones', component: RedencionesComponent },
    { path: 'educacion', component: EducacionComponent },
    // { path: 'login', component: LoginComponent },
    { path: 'usuario', component: UsuarioComponent },
    // { path: 'login-api', component: LoginApiComponent },
    { path: 'userRetos', component: RetosPrivadoComponent },
    { path: 'userProveedor', component: ProveedoresPrivadoComponent },
    { path: 'userInicio', component: InicioPrivadoComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                InicioComponent,
                RetosComponent,
                JuegosComponent,
                ConcursosComponent,
                MapaComponent,
                RedencionesComponent,
                EducacionComponent,
                RegistrarComponent,
                UsuarioComponent,
                LoginApiComponent,
                RetosPrivadoComponent,
                ProveedoresPrivadoComponent,
                InicioPrivadoComponent
            ],
            imports: [
                BrowserModule,
                ReactiveFormsModule,
                FormsModule,
                AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCekL_FlQ4fNRVPfJUxh997Gwzk8zE0jDE'
                }),
                AngularFireModule.initializeApp(environment.firebase),
                AngularFirestoreModule,
                AngularFireAuthModule,
                RouterModule.forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                HttpClientModule
            ],
            providers: [AuthService, UserService, AuthGuard, LoginService, UsuarioService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map