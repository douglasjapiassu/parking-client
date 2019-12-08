import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.listParkingLots();
  }

  listParkingLots() {
    this.httpClientService.getDashboard().subscribe(response => {
      if (response && response.length) {
        this.data = [];

        for (let x:number = 0; x < response.length; x++) {
          let p = response[x];
          this.data[x] = {
            id: p.id,
            title: p.description,
            showEntry : p.freeParkingSpaces > 0,
            chart: {
              labels: ['Livre', 'Ocupado'],
              datasets: [{
                data: [p.freeParkingSpaces, (p.parkingSpaces - p.freeParkingSpaces)],
                backgroundColor: [
                    "#08a71b",
                    "#e10404",
                ],
                hoverBackgroundColor: [
                    "#048614",
                    "#b50707",
                ]
              }]
            }
          };
        }
      }
    });
  }

  registerEntry(item) {
    this.router.navigate(['parking/addEntry'], { queryParams: { parkingLot: item.id } });
  }

  registerExit(item) {
    this.router.navigate(['parking/addExit'], { queryParams: { parkingLot: item.id } });
  }

}
