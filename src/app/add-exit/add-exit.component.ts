import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClientService, Vehicle } from '../service/http-client.service';

@Component({
  selector: 'app-add-exit',
  templateUrl: './add-exit.component.html',
  styleUrls: ['./add-exit.component.css']
})
export class AddExitComponent implements OnInit {

  parkingLot: number;
  exit: any;
  vehicles : Vehicle[];
  showInfo : boolean;

  exitCalc : any;

  constructor(private router : Router, private route: ActivatedRoute, private httpService : HttpClientService) { }

  ngOnInit() {
    this.exit = {};
    this.exitCalc = {
      amount : null,
      lenghtOfStayInMinutes : null,
    };

    this.parkingLot = parseInt(this.route.snapshot.queryParams.parkingLot);
    this.exit.parkingLotId = this.parkingLot;
    this.loadVehicles();
  };

  loadVehicles() {
    this.httpService.getParkedVehicles(this.exit.parkingLotId).subscribe(response => {
      this.vehicles = response;
    });
  };

  createExit() {
    this.httpService.registerExit(this.exit).subscribe(() => {
      this.router.navigate(['parking/dashboard']);
    });
  };

  retrieveExitData(x) {
    this.showInfo = false;
    this.httpService.retrieveExitData(this.parkingLot, x).subscribe(response => {
      this.showInfo = true;
      this.exitCalc = response;
    });
  };

}
