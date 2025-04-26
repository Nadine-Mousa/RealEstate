import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private httpClinet:HttpClient) {}

  getAllProperties(){
    return this.httpClinet.get('data/properties.json');
  }
}
