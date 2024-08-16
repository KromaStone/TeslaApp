// angular import
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/users/footer/footer.component';
import { NavbarComponent } from 'src/app/users/navbar/navbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,FooterComponent, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  // public method
  SignUpOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
}
