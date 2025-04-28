import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/iproperty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private httpClient:HttpClient) {}

  getAllProperties(): Observable<IProperty[]>{
    return this.httpClient.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray : Array<IProperty> = [];
        for(const id in data){
          if(data.hasOwnProperty(id)){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }
}
