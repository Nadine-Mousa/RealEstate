import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-property-card',
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css']
})

export class PropertyCardComponent  {
    @Input () Property : any;
    // property : any = {
    //     Id: 101,
    //     Name: "Modern Apartment in Downtown",
    //     Type: "Apartment",
    //     Price: 350000,
    //     Location: "123 Nile Street, Zamalek, Cairo",
    //     Bedrooms: 3,
    //     Bathrooms: 2,
    //     Area: 200 
    // }
}