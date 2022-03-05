import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  login: Login = {
    username: "",
    password: ""
  };

  error = "";

  ngOnInit(): void {
    sessionStorage.clear();
  }

  submitLogin() {
    this.authService.login(this.login).subscribe(res => {
      sessionStorage.setItem('token', res.token);
      location.href = '/my-excuses'
      
    }, fail => {
      this.error = fail.error.non_field_errors[0];
    });
  }

}
