import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-crate-account',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './crate-account.component.html',
  styleUrl: './crate-account.component.scss'
})
export class CrateAccountComponent {

}
