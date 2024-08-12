import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Login } from '../../loginClass/login';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  constructor() { }

  private baseUrl= 'https://localhost:7000/api/';

  login(login: Login) {
    const api = `${this.baseUrl}Auth/Login`;
    return api;
  }
}
