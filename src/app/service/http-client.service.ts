import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Client {
  constructor(
    public id:number,
    public name:string,
    public document:string,
    public phone:string,
  ) {}
}

export class ParkingLot {
  constructor(
    public id:number,
    public description:string,
    public parkingSpaces:number,
    public hourlyRate:number,
    public freeParkingSpaces:number,
  ) {}
}

export class Vehicle {
  constructor(
    public id:number,
    public plate:string,
    public model:string,
    public color:number,
    public client:Client,
  ) {}
}

export class Parking {
  constructor(
    public id:number,
    public parkingLotId:number,
    public vehicleId:number,
  ) {}
}

export class CodeLabel {
  constructor(
    public code:number,
    public label:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  public getVehicleColors() {
    return this.httpClient.get<CodeLabel[]>(`${environment.apiUrl}/vehicle/colors`);
  }

  public getClients() {
    return this.httpClient.get<Client[]>(`${environment.apiUrl}/client`);
  }

  public getClient(id) {
    return this.httpClient.get<Client>(`${environment.apiUrl}/client/${id}`);
  }

  public createClient(client) {
    return this.httpClient.post<Client>(`${environment.apiUrl}/client`, client);
  }

  public deleteClient(id) {
    return this.httpClient.delete<Client>(`${environment.apiUrl}/client/${id}`);
  }

  public getDashboard() {
    return this.httpClient.get<ParkingLot[]>(`${environment.apiUrl}/parking-lot/dashboard`);
  }

  public getParkingLots() {
    return this.httpClient.get<ParkingLot[]>(`${environment.apiUrl}/parking-lot`);
  }

  public getParkingLot(id) {
    return this.httpClient.get<ParkingLot>(`${environment.apiUrl}/parking-lot/${id}`);
  }

  public createParkingLot(client) {
    return this.httpClient.post<ParkingLot>(`${environment.apiUrl}/parking-lot`, client);
  }

  public deleteParkingLot(id) {
    return this.httpClient.delete<ParkingLot>(`${environment.apiUrl}/parking-lot/${id}`);
  }

  public getVehicles() {
    return this.httpClient.get<Vehicle[]>(`${environment.apiUrl}/vehicle`);
  }

  public getParkedVehicles(id) {
    return this.httpClient.get<Vehicle[]>(`${environment.apiUrl}/vehicle/${id}/parked`);
  }

  public getNotParkedVehicles(id) {
    return this.httpClient.get<Vehicle[]>(`${environment.apiUrl}/vehicle/${id}/not-parked`);
  }

  public getVehicle(id) {
    return this.httpClient.get<Vehicle>(`${environment.apiUrl}/vehicle/${id}`);
  }

  public createVehicle(client) {
    return this.httpClient.post<Vehicle>(`${environment.apiUrl}/vehicle`, client);
  }

  public deleteVehicle(id) {
    return this.httpClient.delete<Vehicle>(`${environment.apiUrl}/vehicle/${id}`);
  }

  public registerEntry(param) {
    let p = {
      parkingLot : {
        id : param.parkingLotId
      },
      vehicle : {
        id : param.vehicleId
      },
      entryDate : new Date(),
      exitDate : null
    };
    return this.httpClient.post<Parking>(`${environment.apiUrl}/parking/entry`, p);
  }

  public registerExit(param) {
    let p = {
      parkingLot : {
        id : param.parkingLotId
      },
      vehicle : {
        id : param.vehicleId
      },
      entryDate : param.entryDate,
      exitDate : new Date()
    };
    return this.httpClient.post<Parking>(`${environment.apiUrl}/parking/exit`, p);
  }
}
