import { Injectable } from '@angular/core';
import { Login } from './interfaces/login';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = `${environment.baseUrl}`;
  constructor() { }


  login(login: Login) {
    const api = `${this.baseUrl}/Auth/Login`;
    return api;
  }



  getUser(){
    const api = `${this.baseUrl}/Admin`;
    return api;
  }
}
