import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Login } from '../loginClass/login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  Userlogin: Login = new Login();
  constructor(private authService: AuthService,
    private renderer: Renderer2
  ) { }

  @ViewChild('notificationContainer', { static: true })
  notificationContainer!: ElementRef;

  currentEmail :string = 'Email';
  toggleEmailPassword:string = 'Email'
  isEmail: boolean = false;
  afterEmail() {
    this.isEmail = true;
     this.toggleEmailPassword = 'Password'
    this.currentEmail = this.Userlogin.Email;
  }
changeEmail(){
    this.isEmail = false;
     this.toggleEmailPassword = 'Email'
}
  login() {
    this.authService.Login(this.Userlogin).subscribe(
      (response) => {
        console.log('response', response)
        if (response.success == true) {
          alert('ok')
        }
        if (response.success == false) {
          alert(' not ok')
        }
      },
      (error) => {
        this.Userlogin.Email = '';
        this.Userlogin.Password = '';
        alert(' not o ghfyfghfk')
      }
    )
  }

  showNotification(message: string) {
    const notification = this.renderer.createElement('div');

    this.renderer.setStyle(notification, 'background-color', 'red'); // Background color
    this.renderer.setStyle(notification, 'color', 'white'); // Text color
    this.renderer.setStyle(notification, 'padding', '10px'); // Padding
    this.renderer.setStyle(notification, 'margin', '10px 0'); // Margin
    this.renderer.setStyle(notification, 'border-radius', '4px'); // Border radius
    this.renderer.setStyle(notification, 'display', 'block'); // Display block to ensure it's a block-level element
    this.renderer.setStyle(notification, 'text-align', 'center'); // Text alignment
    this.renderer.setStyle(notification, 'width', '20%'); // Reducing the width of the notification
    this.renderer.setStyle(notification, 'max-width', '600px'); // Max width to ensure responsiveness
    this.renderer.setStyle(notification, 'left', '50%'); // Center horizontally
    this.renderer.setStyle(notification, 'transform', 'translateX(-50%)'); // Correct centering
    this.renderer.setStyle(notification, 'position', 'relative'); // Relative positioning (can use 'fixed' or 'absolute' if needed)

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
}
