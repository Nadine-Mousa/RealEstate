import { Component, HostListener, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isScrolled = false;
  isLoggedIn = false;

  constructor(private alertify: AlertifyService){}
  @HostListener('window:scroll')
  scrollHandler() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
    this.scrollHandler();
    
  }
  onLoggedIn(){
    return localStorage.getItem('token');
  }

  onLogOut(){
    localStorage.removeItem('token');
    this.alertify.displaySuccessNotification("Logged out successfully!");
  }
}