import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Category, IProperty } from '../property/iproperty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private httpClient:HttpClient) {}

  getAllProperties(category?: 'sale' | 'rent'): Observable<IProperty[]>{
    return this.httpClient.get<IProperty[]>('data/properties.json').pipe(
      map(properties => {

        if(!category) return properties;

        
        return properties.filter( p => p.Category.toLowerCase() == category.toLowerCase());
      })
    )
  }
}
