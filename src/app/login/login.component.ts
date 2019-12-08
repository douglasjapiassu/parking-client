import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpAuthService } from '../service/http-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = ''
  invalidLogin=false

  constructor(private router:Router, private loginservice:HttpAuthService) { }

  ngOnInit() {
  }

  handleLogin()
  {
    this.loginservice.authenticate({ username: this.username, password: this.password }).subscribe(() => {
      this.router.navigate(['parking/dashboard']);
      this.invalidLogin=false;
    }, () => {
      this.invalidLogin=true
    });
    
  }

}
