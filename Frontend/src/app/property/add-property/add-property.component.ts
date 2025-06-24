import { NgForOf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  addPropertyForm: FormGroup;
  
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

  constructor(private router: Router, private fb: FormBuilder) { }
  openDropdown: string | null = null;
  isCollapsed = true;

  toggleDropdown(dropdown: string) {
    this.openDropdown = this.openDropdown === dropdown ? null : dropdown;
  }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  onBack(){
    this.router.navigate(['/'])
  }
  onSubmit(){
    console.log('form submitted');
    console.log(this.addPropertyForm.value);
  }
  selectTab(tabId: number, IsCurrentTabValid: boolean) {
    if (this.staticTabs?.tabs[tabId] && IsCurrentTabValid) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }





 CreateAddPropertyForm() {
  this.addPropertyForm = this.fb.group({
    // Tab 1: Basic Info
    BasicInfo: this.fb.group({
      SellOrRent: ['', Validators.required],
      PropertyType: ['', Validators.required],
      Name: ['', [Validators.required, Validators.minLength(5)]],
      FurnishType: ['', Validators.required],
      Bedrooms: ['', [Validators.required, Validators.min(0)]],
      Bathrooms: ['', [Validators.required, Validators.min(0)]],
      SiteType: ['']
    }),

    // Tab 2: Pricing & Area
    PricingArea: this.fb.group({
      Price: ['', [Validators.required, Validators.min(0)]],
      Security: ['', Validators.min(0)],
      Maintenance: ['', Validators.min(0)],
      BuiltArea: ['', [Validators.required, Validators.min(0)]],
      CarpetArea: ['', Validators.min(0)]
    }),

    // Tab 3: Address
    Address: this.fb.group({
      Floor: [''],
      TotalFloor: [''],
      City: ['', Validators.required],
      Address: ['', Validators.required],
      Landmark: ['']
    }),

    // Tab 4: Other Details
    OtherDetails: this.fb.group({
      ReadyToMove: [false],
      AvailableFrom: [''],
      AgeOfProperty: ['', Validators.min(0)],
      GatedCommunity: [false],
      MainEntrance: [''],
      Description: ['', Validators.maxLength(500)]
    }),

    // Tab 5: Photos
    Photos: this.fb.group({
      Photos: this.fb.array([])
    })
  });
}

  //#region Getters
  get BasicInfo(){
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }
  get PricingArea(){
    return this.addPropertyForm.controls.PricingArea as FormGroup;
  }
  get Address(){
    return this.addPropertyForm.controls.Address as FormGroup;
  }
  get OtherDetails(){
    return this.addPropertyForm.controls.OtherDetails as FormGroup;
  }
  //#endregion

}
