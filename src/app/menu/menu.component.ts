import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpAuthService } from '../service/http-auth.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listMenu : MenuItem[];

  activeItem : MenuItem;

  isUserLoggedIn:boolean = false;

  constructor(private router:Router, private loginService:HttpAuthService) { }

  ngOnInit() {
    const currentUser = this.loginService.currentUserValue;
    if (currentUser) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }

    this.listMenu = [
      {
        label: 'Home', icon: 'fa fa-home', routerLink: 'parking/dashboard'
      },
      {separator:true},
      {
          label: 'Pátios',
          icon: 'fa fa-product-hunt',
          items: [
            { label: 'Listar', routerLink: 'parking/parkingLots' },
            { label: 'Adicionar', routerLink: 'parking/addParkingLot' },
          ]
      },
      {
          label: 'Clientes',
          icon: 'fa fa-address-book',
          items: [
            { label: 'Listar', routerLink: 'parking/clients' },
            { label: 'Adicionar', routerLink: 'parking/addClient' },
          ]
      },
      {
          label: 'Veículos',
          icon: 'fa fa-car',
          items: [
            { label: 'Listar', routerLink: 'parking/vehicles' },
            { label: 'Adicionar', routerLink: 'parking/addVehicle' },
          ]
      },
    ];
  }

  handleLogout() {
    this.loginService.logOut();
    this.router.navigate(['parking/login']);
  }

}
