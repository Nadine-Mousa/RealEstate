import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authenticateUser(user : any){
let users = [];
if(localStorage.getItem('users')){
  users = JSON.parse(localStorage.getItem('users'));

}
return users.find(u => u.email === user.email && u.password === user.password);
}
}
