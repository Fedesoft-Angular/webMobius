import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.get("https://mobiusdb-2018.herokuapp.com/api/users/Nombre='" + username + "'/Clave='" + password + "'");
  }
}