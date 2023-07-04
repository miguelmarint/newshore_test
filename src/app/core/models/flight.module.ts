import {Transport} from "./transport.module";

export class Flight {
  transport?: Transport;
  departureStation: string;
  arrivalStation: string;
  price?: number;
  constructor (departureStation: string, arrivalStation:string){
    this.departureStation = departureStation;
    this.arrivalStation = arrivalStation;
  }
}
