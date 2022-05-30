import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(user: string , pass:string){
    if(user !== '' && pass !== '') return 200;
    else return 403;
  }
}
