import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ErrorComponent } from './error/error.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { ParkingLotComponent } from './parking-lot/parking-lot.component';
import { AddParkingLotComponent } from './add-parking-lot/add-parking-lot.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { AddExitComponent } from './add-exit/add-exit.component';

const routes: Routes = [
  { path:'', component: LoginComponent},
  { path:'parking', component: LoginComponent},
{ path:'parking/login', component: LoginComponent},
{ path:'parking/dashboard', component: DashboardComponent,canActivate:[RouteGaurdService] },
{ path:'parking/clients', component: ClientsComponent,canActivate:[RouteGaurdService] },
{ path:'parking/addClient', component: AddClientComponent, canActivate:[RouteGaurdService]},
{ path:'parking/editClient', component: AddClientComponent, canActivate:[RouteGaurdService]},
{ path:'parking/addParkingLot', component: AddParkingLotComponent, canActivate:[RouteGaurdService] },
{ path:'parking/editParkingLot', component: AddParkingLotComponent, canActivate:[RouteGaurdService] },
{ path:'parking/parkingLots', component: ParkingLotComponent, canActivate:[RouteGaurdService] },
{ path:'parking/vehicles', component: VehicleComponent, canActivate:[RouteGaurdService] },
{ path:'parking/addVehicle', component: AddVehicleComponent, canActivate:[RouteGaurdService] },
{ path:'parking/editVehicle', component: AddVehicleComponent, canActivate:[RouteGaurdService] },
{ path:'parking/addEntry', component: AddEntryComponent, canActivate:[RouteGaurdService] },
{ path:'parking/addExit', component: AddExitComponent, canActivate:[RouteGaurdService] },
{ path:'**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
