import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClientService, Vehicle } from '../service/http-client.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  parkingLot: number;
  entry: any;
  vehicles : Vehicle[];

  constructor(private router : Router,private route: ActivatedRoute, private httpService : HttpClientService) { }

  ngOnInit() {
    this.entry = {};

    this.parkingLot = parseInt(this.route.snapshot.queryParams.parkingLot);
    this.entry.parkingLotId = this.parkingLot;
    this.loadVehicles();
  }

  loadVehicles() {
    this.httpService.getNotParkedVehicles(this.entry.parkingLotId).subscribe(response => {
      this.vehicles = response;
    });
  }

  createEntry() {
    this.httpService.registerEntry(this.entry).subscribe(() => {
      this.router.navigate(['parking/dashboard']);
    });
  }

}
