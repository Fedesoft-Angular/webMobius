import { Component} from '@angular/core';
import { AuthService } from '../../providers/auth.Service';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public afService: AuthService,
    private router: Router,
    private fb: FormBuilder,

  ) {
    this.createForm();
  }


  
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.afService.doFacebookLogin()
      .then(res => {
        this.router.navigate(['/usuario']);
      })
  }

  tryTwitterLogin() {
    this.afService.doTwitterLogin()
      .then(res => {
        this.router.navigate(['/usuario']);
      })
  }

  tryGoogleLogin() {
    this.afService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/usuario']);
      })
  }

  tryLogin(value) {
    this.afService.doLogin(value)
      .then(res => {
        this.router.navigate(['/usuario']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }

}
