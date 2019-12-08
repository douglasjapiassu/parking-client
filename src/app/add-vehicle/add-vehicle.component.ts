import { Component, OnInit } from '@angular/core';
import { Vehicle, HttpClientService, CodeLabel, Client } from '../service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  vehicle: Vehicle = new Vehicle(null, '', null, null, new Client(null, '', '', ''));
  colors: CodeLabel[];
  clients: Client[];

  constructor(private router : Router, private route : ActivatedRoute, private httpClientService: HttpClientService) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.edit) {
      this.httpClientService.getVehicle(this.route.snapshot.queryParams.id).subscribe(response => {
        this.vehicle = response;
        this.loadColors(false);
        this.loadClients(false);
      });
    } else {
      this.loadColors(true);
      this.loadClients(true);
    }
  };

  loadColors(initialize:boolean):void {
    this.httpClientService.getVehicleColors().subscribe(response => {
      this.colors = response;
      if (initialize) {
        this.vehicle.color = this.colors[0].code;
      }
    });
  };
  
  loadClients(initialize:boolean):void {
    this.httpClientService.getClients().subscribe(response => {
      this.clients = response;
      if (initialize) {
        this.vehicle.client.id = this.clients[0].id;
      }
    });
  }

  createVehicle(): void {
    this.httpClientService.createVehicle(this.vehicle).subscribe(() => {
      alert("Veículo criado com sucesso.");
      this.router.navigate(['parking/vehicles']);

    });
  };

}
