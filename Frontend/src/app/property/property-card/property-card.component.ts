import { Component, Input, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { IProperty } from '../iproperty';

@Component({
    selector: 'app-property-card',
    templateUrl: './property-card.component.html',
    styleUrls: ['./property-card.component.css'],
    standalone: false
})
export class PropertyCardComponent implements OnInit {
  @Input() Property: IProperty;
  @Input() HideIcons: boolean;

  ngOnInit() {
    // Initialize Bootstrap tooltips if using them
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }
}