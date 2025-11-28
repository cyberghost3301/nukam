import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: Date = new Date();
  focus;
  focus1;

  credentials = {
    username: '',
    password: ''
  };
  
  errorMessage = '';

  constructor(private router: Router) { }

  ngOnInit() {
    // Styling setup...
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    
    // Auto-redirect if already logged in
    if (localStorage.getItem('isSpirecrestAdmin') === 'true') {
        this.router.navigate(['/dashboard']);
    }
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  login() {
    // SECURITY CHECK
    if (this.credentials.username === 'admin' && this.credentials.password === 'spirecrest2025') {
        // 1. Save the key to the browser
        localStorage.setItem('isSpirecrestAdmin', 'true');
        
        // 2. Redirect to Dashboard
        this.router.navigate(['/dashboard']);
    } else {
        this.errorMessage = 'Invalid Credentials. Access Denied.';
    }
  }
}