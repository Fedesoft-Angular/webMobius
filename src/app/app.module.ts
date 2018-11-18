import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { LoginService } from './services/login.service'

import { AgmCoreModule } from '@agm/core';

import { InicioComponent } from './components/inicio/inicio.component';
import { RetosComponent } from './components/retos/retos.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { ConcursosComponent } from './components/concursos/concursos.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { RedencionesComponent } from './components/redenciones/redenciones.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginApiComponent } from './components/login-api/login-api.component';
import { UsuarioService } from './services/usuario.service';
import { RetosPrivadoComponent } from './components/retos-privado/retos-privado.component';
import { ProveedoresPrivadoComponent } from './components/proveedores-privado/proveedores-privado.component';
import { InicioPrivadoComponent } from './components/inicio-privado/inicio-privado.component';

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'retos', component: RetosComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: 'concursos', component: ConcursosComponent },
  { path: 'mapa', component: MapaComponent },
  { path: 'redenciones', component: RedencionesComponent },
  { path: 'educacion', component: EducacionComponent },
  // { path: 'login', component: LoginComponent },
  
  // { path: 'login-api', component: LoginApiComponent },
  { path: 'userRetos', component: RetosPrivadoComponent },
  { path: 'userProveedor', component: ProveedoresPrivadoComponent },
  { path: 'userInicio', component: InicioPrivadoComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RetosComponent,
    JuegosComponent,
    ConcursosComponent,
    MapaComponent,
    RedencionesComponent,
    EducacionComponent,
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
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule
  ],
  providers: [ LoginService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
