import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  Properties : Array<any> = [
    {
      Id: 101,
      Name: "Modern Apartment in Downtown",
      Type: "Apartment",
      Price: 350000,
      Location: "123 Nile Street, Zamalek, Cairo",
      Bedrooms: 3,
      Bathrooms: 2,
      Area: 200 
  },
  {
      Id: 102,
      Name: "Luxury Villa in New Cairo",
      Type: "Villa",
      Price: 850000,
      Location: "45 Palm Hills, New Cairo, Cairo",
      Bedrooms: 5,
      Bathrooms: 4,
      Area: 500
  },
  {
      Id: 103,
      Name: "Cozy Studio in Maadi",
      Type: "Studio",
      Price: 180000,
      Location: "78 Road 9, Maadi, Cairo",
      Bedrooms: 1,
      Bathrooms: 1,
      Area: 65
  },
  {
      Id: 104,
      Name: "Family House in 6th October",
      Type: "House",
      Price: 420000,
      Location: "12 Green Park, 6th October City, Giza",
      Bedrooms: 4,
      Bathrooms: 3,
      Area: 300
  },
  {
      Id: 105,
      Name: "Penthouse with Nile View",
      Type: "Penthouse",
      Price: 950000,
      Location: "5 Corniche El Nil, Garden City, Cairo",
      Bedrooms: 4,
      Bathrooms: 3,
      Area: 400
  },
  {
      Id: 106,
      Name: "Duplex in Sheikh Zayed",
      Type: "Duplex",
      Price: 600000,
      Location: "21 Beverly Hills, Sheikh Zayed, Giza",
      Bedrooms: 3,
      Bathrooms: 2,
      Area: 280
  },
  {
      Id: 107,
      Name: "Modern Apartment in Nasr City",
      Type: "Apartment",
      Price: 320000,
      Location: "88 Abbas El Akkad, Nasr City, Cairo",
      Bedrooms: 2,
      Bathrooms: 2,
      Area: 150
  }

  ]
  

}
