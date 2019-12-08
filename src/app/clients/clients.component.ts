import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Client } from '../service/http-client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getClients().subscribe(response => {
      this.clients = response;
    });
  }

  deleteClient(client: Client): void {
    this.httpClientService.deleteClient(client.id).subscribe(() => {
      this.clients = this.clients.filter(u => u !== client);
    });
  };

  editClient(client: Client): void {
    this.router.navigate(['parking/editClient'], { queryParams: { edit: true, id: client.id } });
  };

}
