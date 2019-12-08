import { Component, OnInit } from '@angular/core';
import { ParkingLot, HttpClientService } from '../service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-parking-lot',
  templateUrl: './add-parking-lot.component.html',
  styleUrls: ['./add-parking-lot.component.css']
})
export class AddParkingLotComponent implements OnInit {

  parkingLot : ParkingLot = new ParkingLot(null, '', null, null, null);

  constructor(private router : Router, private route : ActivatedRoute, private httpClientService: HttpClientService) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.edit) {
      this.httpClientService.getParkingLot(this.route.snapshot.queryParams.id).subscribe(response => {
        this.parkingLot = response;
      });
    }
  }

  createParkingLot(): void {
    this.httpClientService.createParkingLot(this.parkingLot).subscribe(() => {
      alert("Pátio criado com sucesso.");
      this.router.navigate(['parking/parkingLots']);

    });
  };

}
