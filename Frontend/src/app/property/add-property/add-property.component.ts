import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FurnishType, IProperty, PropertyType } from '../iproperty';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@Component({
    selector: 'app-add-property',
    templateUrl: './add-property.component.html',
    styleUrls: ['./add-property.component.scss'],
    standalone: false,
     providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
  // Available options
  propertyTypes: PropertyType[] = ['Apartment', 'Villa', 'House', 'Studio', 'Penthouse', 'Duplex'];
  furnishTypes: FurnishType[] = ['Semi', 'Fully', 'Unfurnished'];
  
  // Selected values
  selectedPropertyType: PropertyType = 'Apartment'; // Default
  selectedFurnishType: FurnishType = 'Semi'; // Default


  propertyView : IProperty = {
    Id: null,
    Name: null,
    PropertyType: null,
    Price: null,
    Bedrooms: null,
    Bathrooms: null,
    SellOrRent: null,
    Image: null,
    FurnishType: null,
    SiteType : null,
    Security: null,
    Maintenance : null,
    BuiltArea: null,
    CarpetArea: null,
    Floor : null,
    TotalFloor: null,
    Address: null,
    City: null,
    Landmark: null,
    ReadyToMove: null,
    AvailableFrom: null,
    AgeOfProperty: null,
    GatedCommunity: null,
    MainEntrance: null,
    Description: null,
  };

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
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
}
