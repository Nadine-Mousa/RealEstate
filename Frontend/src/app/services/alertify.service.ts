import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs'

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

displaySuccessNotification(message: string){
  alertify.success(message);
}
displayErrorNotification(message: string){
  alertify.error(message);
}
displayWarningNotification(message: string){
  alertify.warn(message);
}

}
