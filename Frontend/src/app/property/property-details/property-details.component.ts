import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-property-details',
    templateUrl: './property-details.component.html',
    styleUrls: ['./property-details.component.scss'],
    standalone: false
})
export class PropertyDetailsComponent implements OnInit {
  propertyId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyId = Number(this.route.snapshot.params['id']);

    // Let the property id change when params of the component change
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    );
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
