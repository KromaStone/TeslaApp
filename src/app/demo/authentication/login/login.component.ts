
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

import { Router, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/users/footer/footer.component';

import { NavbarComponent } from 'src/app/users/navbar/navbar.component';
import { Login } from 'src/app/core/interfaces/login';
import { LoginService } from 'src/app/core/login/login.service';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { jwtDecode } from 'jwt-decode';
import { error } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // Userlogin: Login = new Login();
  constructor(private authService: AuthenticationService,
    private renderer: Renderer2,
    private loginservice: LoginService,
    private router: Router,
  ) { }

  @ViewChild('notificationContainer', { static: true })
  notificationContainer!: ElementRef;

  currentEmail: string = 'Email';
  toggleEmailPassword: string = 'Email'
  isEmail: boolean = false;
  afterEmail() {
    this.isEmail = true;
    this.toggleEmailPassword = 'Password'
    this.currentEmail = this.login.Email;
  }
  changeEmail() {
    this.isEmail = false;
    this.toggleEmailPassword = 'Email'
  }
  // login() {
  //   this.authService.Login(this.Userlogin).subscribe(
  //     (response) => {
  //       console.log('response', response)
  //       if (response.success == true) {
  //         alert('ok')
  //       }
  //       if (response.success == false) {
  //         alert(' not ok')
  //       }
  //     },
  //     (error) => {
  //       this.Userlogin.Email = '';
  //       this.Userlogin.Password = '';
  //       alert(' not o ghfyfghfk')
  //     }
  //   )
  // }


  login: Login = new Login();

  loginClick() {
    this.loginservice.CheckUser(this.login).subscribe(
      (response) => {
        if (response.success == true) {
          this.router.navigateByUrl('Admin');
        }
        console.log('respnse', response)
        const Data = sessionStorage.getItem('Response');
        const msg = JSON.parse(Data);
        const token = msg.token;
        if (token) {
          debugger
          const decodedToken = jwtDecode(token);
          console.log('decodedToken', decodedToken)
          const expirationTime = decodedToken.exp;
          const expirationTimeReadable = new Date(expirationTime * 1000);
          //Decoding Jwt TokenRole

          const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          console.log('role', role)

          // if (msg && msg.message === 'Log in successful' && role == 'Admin') {
          //   this.router.navigateByUrl('Admin');
          // }
          // else if (msg && msg.message === 'Log in successful' && role == 'User') {
          //   // this.loginservice.loginStatus()
          // }
          // else if (msg && msg.message === 'Log in successful' && role == 'Partner') {
          //   this.router.navigateByUrl('Partner');
          // }
          // else {
          //   // this.loginservice.closeModal()
          //   this.showNotification('Invalid Password/Username');
          // }
        }
        else {
          //calling Notification Method
          this.showNotification('Invalid Password/Username');
        }
      },
      (error) => {
        //calling Notification Method
        // this.loginservice.closeModal()
        this.showNotification('Invalid Password/Username');
        this.login.Email = '';
        this.login.Password = '';
      }
    );
  }
  showNotification(message: string) {
    const notification = this.renderer.createElement('div');

    this.renderer.setStyle(notification, 'background-color', 'red');
    this.renderer.setStyle(notification, 'color', 'white');
    this.renderer.setStyle(notification, 'padding', '10px');
    this.renderer.setStyle(notification, 'margin', '10px 0');
    this.renderer.setStyle(notification, 'border-radius', '4px');
    this.renderer.setStyle(notification, 'display', 'block');
    this.renderer.setStyle(notification, 'text-align', 'center');
    this.renderer.setStyle(notification, 'width', '20%');
    this.renderer.setStyle(notification, 'max-width', '600px');
    this.renderer.setStyle(notification, 'left', '50%');
    this.renderer.setStyle(notification, 'transform', 'translateX(-50%)');
    this.renderer.setStyle(notification, 'position', 'relative');

    // Add text to the notification
    const text = this.renderer.createText(message);
    this.renderer.appendChild(notification, text);

    // Append the notification to the container
    if (this.notificationContainer && this.notificationContainer.nativeElement) {
      this.renderer.appendChild(this.notificationContainer.nativeElement, notification);
    } else {
      console.error('Notification container is not available');
    }

    // Set a timeout to remove the notification after 3000ms (3 seconds)
    setTimeout(() => {
      if (this.notificationContainer && this.notificationContainer.nativeElement) {
        this.renderer.removeChild(this.notificationContainer.nativeElement, notification);
      }
    }, 3000);
  }



  getUsers() {
    this.loginservice.getUsers().subscribe((response) => {
      console.log('test', response)
    },
      (error) => {

        console.log(error)
      }
    )
  }



}
