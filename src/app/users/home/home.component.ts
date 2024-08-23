import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  homeSection = [
    // {
    //   imageUrl: "./../../../assets/images/backgrounds/Homepage-Model-3-Desktop-US.avif",
    //   title: "Model 3",
    //   titleDetail: "1.99% APR Financing Ending August 31",
    //   titleDetailLink: "#",
    //   Price: "34,9901",
    // },
    {
      imageUrl: "./../../../assets/images/backgrounds/Homepage-Model-Y-Desktop-US-v2.avif",
      title: "Model Y",
      titleDetail: "1.99% APR Financing Ending August 31",
      titleDetailLink: "#",
      Price: "34,9901",
    },
    {
      imageUrl: "./../../../assets/images/backgrounds/Homepage-Model-X-Desktop-US.avif",
      title: "Model X",
      titleDetail: "1.99% APR Financing Ending August 31",
      titleDetailLink: "#",
      Price: "34,9901",
    },
    {
      imageUrl: "./../../../assets/images/backgrounds/Homepage-Model-S-Desktop-US.avif",
      title: "Model S",
      titleDetail: "1.99% APR Financing Ending August 31",
      titleDetailLink: "#",
      Price: "34,9901",
    },
  ]

  iconColor: string;

  constructor() {
    this.iconColor = 'white';
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
