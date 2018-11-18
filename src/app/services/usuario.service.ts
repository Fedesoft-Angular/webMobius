import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable()
export class UsuarioService {

  private isUserLoggedIn;
  public usserLogged:Usuario;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:Usuario) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  
  }

  getUserLoggedIn() {
  	return JSON.parse(localStorage.getItem('currentUser'));
  }

  getUserLoggedOut() {
    this.isUserLoggedIn = false;
    localStorage.removeItem('currentUser');
  
  }

}