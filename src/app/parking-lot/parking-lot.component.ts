import { Component, OnInit } from '@angular/core';
import { HttpClientService, ParkingLot } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parking-lot',
  templateUrl: './parking-lot.component.html',
  styleUrls: ['./parking-lot.component.css']
})
export class ParkingLotComponent implements OnInit {

  parkingLots: ParkingLot[];

  constructor(private router :Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getParkingLots().subscribe(response => {
      this.parkingLots = response;
    });
  }

  deleteParkingLot(parkingLot: ParkingLot): void {
    this.httpClientService.deleteParkingLot(parkingLot.id).subscribe(() => {
      this.parkingLots = this.parkingLots.filter(u => u !== parkingLot);
    });
  };

  editParkingLot(parkingLot: ParkingLot): void {
    this.router.navigate(['parking/editParkingLot'], { queryParams: { edit: true, id: parkingLot.id } });
  };

}
