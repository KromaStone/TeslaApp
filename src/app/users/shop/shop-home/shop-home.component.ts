import { Component } from '@angular/core';
import { ShopNavbarComponent } from '../shop-navbar/shop-navbar.component';
import { ShopFooterComponent } from "../shop-footer/shop-footer.component";

@Component({
  selector: 'app-shop-home',
  standalone: true,
  imports: [ShopNavbarComponent, ShopHomeComponent, ShopFooterComponent],
  templateUrl: './shop-home.component.html',
  styleUrl: './shop-home.component.scss'
})
export class ShopHomeComponent {

}
