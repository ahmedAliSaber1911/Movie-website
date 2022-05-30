import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  errorMessage = '';
  constructor(private auth: AuthService , private router : Router) {}

  ngOnInit(): void {}
  login() {
    if (this.username.trim().length === 0) {
      this.errorMessage = 'the user name is required';
    } else if (this.password.trim().length < 4) {
      this.errorMessage = 'the password must be at least 4 charcters';
    } else {
      this.errorMessage = '';
      let res = this.auth.login(this.username , this.password);
      if(res === 200){
        this.router.navigate(['home'])
      }else this.errorMessage = 'Invalid Credentials'
    }
  }
}
