import { Component, OnInit } from '@angular/core';
import { HttpClientService, Client } from '../service/http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = new Client(null, '', null, null);

  constructor(private router : Router, private route: ActivatedRoute, private httpClientService: HttpClientService) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.edit) {
      this.httpClientService.getClient(this.route.snapshot.queryParams.id).subscribe(response => {
        this.client = response;
      });
    }
  }

  createClient(): void {
    this.httpClientService.createClient(this.client).subscribe(() => {
      alert("Cliente criado com sucesso.");
      this.router.navigate(['parking/clients']);

    });
  };

}
