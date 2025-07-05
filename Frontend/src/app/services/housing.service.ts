import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { SellOrRent, IProperty } from '../property/iproperty';
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


        return properties.filter( p => p.SellOrRent.toLowerCase() == category.toLowerCase());
      })
    )
  }
  getProperties(): Observable<IProperty[]>{
    return this.httpClient.get<IProperty[]>("https://localhost:7124/api/Property");
  }
  getProperty(id: number) : Observable<IProperty>{
    return this.httpClient.get<IProperty>("https://localhost:7124/api/Property/id?id="+id);
  }
  getAllCities(): Observable<string[]>{
    return this.httpClient.get<string[]>("https://localhost:7124/api/City");
  }
  getAllPropertyTypes(): Observable<string[]>{
    return this.httpClient.get<string[]>("https://localhost:7124/api/Property/GetPropertyTypes");
  }
  getFurnishTypes(): Observable<string[]>{
    return this.httpClient.get<string[]>("https://localhost:7124/api/Property/GetFurnishTypes");
  }
  getMainEntrances(): Observable<string[]>{
    return this.httpClient.get<string[]>("https://localhost:7124/api/Property/GetMainEntrances");
  }

}
