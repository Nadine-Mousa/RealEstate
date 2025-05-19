import { Component, HostListener, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
    standalone: false
})
export class NavBarComponent implements OnInit {
  isScrolled = false;
  isLoggedIn = false;
  loggedInUser: string;

  constructor(private alertify: AlertifyService, private router: Router){}
  @HostListener('window:scroll')
  scrollHandler() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
    this.scrollHandler();
    
  }
  onLoggedIn(){
    this.loggedInUser = localStorage.getItem('token');
    return this.loggedInUser;
  }

  onLogOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/'])
    this.alertify.displaySuccessNotification("Logged out successfully!");
    
  }
}