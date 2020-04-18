import { Component } from '@angular/core';
import {User} from 'src/app/models/user.model';
import { LoginService } from './login.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [ HttpClient, LoginService, ]
})
export class LoginComponent {
  public user : User;
  constructor(private loginService: LoginService) { 
    this.user = new User();
  }

  validateLogin() {
  	if(this.user.username && this.user.password) {
  		this.loginService.validateLogin(this.user).subscribe(result => {
        console.log('result is ', result);
      }, error => {
        console.log('error is ', error);
      });
  	} else {
  		alert('enter user name and password');
  	}
  }

}
