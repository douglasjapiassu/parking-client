import { Component, OnInit } from '@angular/core';
import { Vehicle, HttpClientService } from '../service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private router: Router, private route : ActivatedRoute, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getVehicles().subscribe(response => {
      this.vehicles = response;
    });
  }

  deleteVehicle(vehicle: Vehicle): void {
    this.httpClientService.deleteClient(vehicle.id).subscribe(() => {
      this.vehicles = this.vehicles.filter(u => u !== vehicle);
    });
  };

  editVehicle(vehicle: Vehicle): void {
    this.router.navigate(['parking/editVehicle'], { queryParams: { edit: true, id: vehicle.id } });
  };

}
