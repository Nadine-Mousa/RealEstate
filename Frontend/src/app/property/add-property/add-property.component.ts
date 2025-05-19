import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-property',
    templateUrl: './add-property.component.html',
    styleUrls: ['./add-property.component.scss'],
    standalone: false
})
export class AddPropertyComponent implements OnInit {

  constructor(private router: Router) { }
  openDropdown: string | null = null;
  isCollapsed = true;

  toggleDropdown(dropdown: string) {
    this.openDropdown = this.openDropdown === dropdown ? null : dropdown;
  }

  ngOnInit() {
  }
  onBack(){
    this.router.navigate(['/'])
  }
  onSubmit(Form: NgForm){
    console.log('form submitted');
    console.log(Form);
  }
}
