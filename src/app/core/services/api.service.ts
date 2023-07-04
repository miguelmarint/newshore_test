import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/flight.module';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }
  url:string = "https://recruiting-api.newshore.es/api/flights/"

  getFlights(route:number):Observable<Flight[]>{
    let url = this.url + route
    return this.http.get<Flight[]>(url);
  }
}
