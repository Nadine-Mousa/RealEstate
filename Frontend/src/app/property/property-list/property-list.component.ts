import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Category, IProperty } from '../iproperty';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties : Array<IProperty>;
  currentCategory: 'sale' | 'rent' | null = null;
  constructor(private housingService: HousingService,private route: ActivatedRoute){  }

  ngOnInit(): void {
    // Get category from URL (expecting '/properties/sale' or '/properties/rent')
    const urlSegment = this.route.snapshot.url[1]?.path;
    
    // // Map URL to category
    this.currentCategory = 
      urlSegment === 'sale' ? 'sale' : 
      urlSegment === 'rent' ? 'rent' : 
      null;  

      this.housingService.getAllProperties(this.currentCategory).subscribe(
        data => {
            this.Properties = data;
        },
        errors => {
            console.log(errors)
        }
      );

  }
}
