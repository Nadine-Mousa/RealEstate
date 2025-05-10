import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Form model
  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  // UI state
  showPassword = false;
  isLoading = false;
  errorMessage = '';

  constructor(private authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  
  onLogin(form: NgForm){
    console.log(form.value);

    if(form.invalid){
      this.alertifyService.displayErrorNotification("Login failed!");
      return;
    }
    const token = this.authService.authenticateUser(form.value);
    if(token){
      localStorage.setItem('token', token.email)
      this.router.navigate(['/']);
      this.alertifyService.displaySuccessNotification("Login Successfull!");
    }
    else {
      this.alertifyService.displayErrorNotification("Incorrect Username or Password");
    }

  }

}
