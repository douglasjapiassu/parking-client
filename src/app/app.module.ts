import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule, ButtonModule, PanelModule, RadioButtonModule } from 'primeng';
import { TableModule } from 'primeng/table';
import { AddClientComponent } from './add-client/add-client.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { JwtInterceptor } from './helpers/jwt.interceptor'
import { MenubarModule } from 'primeng/menubar';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { AddParkingLotComponent } from './add-parking-lot/add-parking-lot.component';
import { CurrencyMaskModule } from "ngx-currency-mask";
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { AddExitComponent } from './add-exit/add-exit.component';
import {InputMaskModule} from 'primeng/inputmask';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    DashboardComponent,
    ClientsComponent,
    AddClientComponent,
    ParkingLotComponent,
    AddParkingLotComponent,
    VehicleComponent,
    AddVehicleComponent,
    AddEntryComponent,
    AddExitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    TableModule,
    HttpClientModule,
    MenubarModule,
    ChartModule,
    CardModule,
    CurrencyMaskModule,
    InputMaskModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
