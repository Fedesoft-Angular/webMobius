import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor( 
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
    ){  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
