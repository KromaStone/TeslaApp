import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { Login } from '../interfaces/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private modalService: NgbModal, private httpclient: HttpClient, private authService: AuthenticationService,) { }
  currentUsername





  CheckUser(login: Login): Observable<any> {
    //Getting api from authService
    var api = this.authService.login(login);
    let headers = new HttpHeaders().set("Authorization", `Bearer ${sessionStorage.getItem('token')}`)
    const response = this.httpclient.post<any>(api, login, { headers });

    return response
      .pipe(
        map((response) => {
          if (response.success == true) {
            console.log('kartik :  ', response)
            this.currentUsername = response.email;
            // sessionStorage['Response'] = JSON.stringify(response);
            // sessionStorage['user'] = JSON.stringify(response.message);
            sessionStorage.setItem('userName', response.message);
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('refreshToken', response.refreshToken)
          }
          return response;
        }),
        catchError((error) => {
          console.error('Error:', error); // Log any errors
          throw error; // Rethrow the error to propagate it to the subscriber
        })
      );
  }


  getUsers() {
    var api = this.authService.getUser();
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const response = this.httpclient.get<any>(api, { headers });
    return response

  }
}
