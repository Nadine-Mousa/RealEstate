import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProperty } from '../iproperty';
import { HousingService } from 'src/app/services/housing.service';

@Component({
    selector: 'app-property-details',
    templateUrl: './property-details.component.html',
    styleUrls: ['./property-details.component.scss'],
    standalone: false
})
export class PropertyDetailsComponent implements OnInit {
  propertyId: number;
  Property: any;

  constructor(private route: ActivatedRoute, private router: Router, private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);

    // Let the property id change when params of the component change
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    );
    this.housingService.getProperty(this.propertyId).subscribe(
      data => {
        console.log("Property got from database: " + data);
        this.Property = data;
      }
    )
  }


  onPrevious(){
    this.propertyId -= 1;
    this.router.navigate(['property-details', this.propertyId]);
  }
  onNext(){
    this.propertyId += 1;
    this.router.navigate(['property-details', this.propertyId]);
    //this.router.navigate(['property-details', this.propertyId], {relativeTo: this.route});
  }


}
