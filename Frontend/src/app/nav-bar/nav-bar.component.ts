import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isScrolled = false;

  @HostListener('window:scroll')
  scrollHandler() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
    this.scrollHandler();
  }
}