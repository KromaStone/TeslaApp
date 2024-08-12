import { Injectable } from '@angular/core';
import { ApiEndpointsService } from './api/api-endpoints.service';
import { Login } from '../loginClass/login';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient , HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUsername: string = '';
  constructor(private apiEndpoints: ApiEndpointsService, private httpclient: HttpClient) { }

  Login(login: Login): Observable<any> {
    var api = this.apiEndpoints.login(login);
    const response = this.httpclient.post<any>(api, login);


    // return response.pipe(
    //   map((response) => {
    //     if (response.success == true) {
    //       this.currentUsername = response.email;
    //       sessionStorage['Response'] = JSON.stringify(response);
    //     }
    //     return response;
    //   }),
    //   catchError((error) => {
    //     throw error; // Rethrow the error to propagate it to the 
    //   }),
    // );

    return response;

  }
}
