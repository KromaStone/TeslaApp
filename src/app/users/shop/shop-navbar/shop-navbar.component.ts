import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './shop-navbar.component.html',
  styleUrl: './shop-navbar.component.scss'
})
export class ShopNavbarComponent {

  iconColor: string;
  constructor() {
    this.iconColor = 'currentColor';
  }

  isNavHovered: boolean = false;
  showNavDiv() {
    this.isNavHovered = true;
  }
  hideNavDiv() {
    this.isNavHovered = false;
  }



  hideAllDivs() {
    this.hideNavDiv()
    this.hideEnergyDiv();
    this.hideVehicleDiv();
    this.hideShopDiv();
    this.hideChargingDiv();
    this.hideDiscoverDiv();
  }



  isVehicleHovered: boolean = false;
  showVehicleDiv() {
    this.isNavHovered = true;
    this.isVehicleHovered = true;
    this.iconColor = 'black'
      
  }
  hideVehicleDiv() {
    this.isVehicleHovered = false;
    // this.hideAllDivs()
    this.isNavHovered = false;
    this.iconColor = 'white'
  }


  isEnergyHovered: boolean = false;
  showEnergyDiv() {
    this.isNavHovered = true;
    this.isEnergyHovered = true;
    this.iconColor = 'black';
  }
  hideEnergyDiv() {
    this.isEnergyHovered = false;
    this.isNavHovered = false;
    this.iconColor = 'white';
  }

  isChargingHovered: boolean = false;
  showChargingDiv() {
    this.isNavHovered = true;
    this.isChargingHovered = true;
    this.iconColor = 'black';
  }
  hideChargingDiv() {
    this.isChargingHovered = false;
    this.isNavHovered = false;
    this.iconColor = 'white';
  }

  isDiscoverHovered: boolean = false;
  showDiscoverDiv() {
    this.isNavHovered = true;
    this.isDiscoverHovered = true;
    this.iconColor = 'black'
  }
  hideDiscoverDiv() {
    this.isDiscoverHovered = false;
    this.isNavHovered = false;
    this.iconColor = 'white';
  }

  isShopHovered: boolean = false;
  showShopDiv() {
    this.isNavHovered = true;
    this.isShopHovered = true;
    this.iconColor = 'black'
  }
  hideShopDiv() {
    this.isShopHovered = false;
    this.isNavHovered = false;
    this.iconColor = 'white';
  }

}
