import {Flight} from "./flight.module";

export class Journey {
  flights: Flight[];
  departureStation: string;
  arrivalStation: string;
  price: number;
  constructor(flights: Flight[], departureStation:string, arrivalStation: string, price: number){
    this.flights = flights;
    this.departureStation = departureStation;
    this.arrivalStation = arrivalStation;
    this.price = price;
  }
}
