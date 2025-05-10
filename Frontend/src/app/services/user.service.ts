import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUserToLocalStorage(user: User){
  let users = [];
  if(localStorage.getItem('users')){
    users = JSON.parse(localStorage.getItem('users'));
    users = [...users, user];
  }
  else {
    users = [user];
  }
  localStorage.setItem('users', JSON.stringify(users));

}

}
