import { Component, Input} from '@angular/core';
import { Flight } from '../../models/flight.module';
import {ApiService} from '../../services/api.service'
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-routeTable',
  templateUrl: './routeTable.component.html',
  styleUrls: ['./routeTable.component.css']
})
export class RouteTableComponent {
  public flightList: Flight[]=[];
  public availableFlights: Flight[]=[];

  constructor(private api:ApiService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.activatedRoute.params.subscribe((params: Params) => {
      let origin = params['origin'];
      let destination = params['destination']
      const flightModel = new Flight(origin, destination);
      this.getFilterFlight(flightModel);
    });
  }

  getFilterFlight(flight: Flight) {
    this.api.getFlights(1).subscribe(vuelos => {
      this.flightList = vuelos
      this.availableFlights = this.flightList.filter(journey => journey.departureStation.toLowerCase().includes(flight.departureStation.toLowerCase())&&
                                        journey.arrivalStation.toLowerCase().includes(flight.arrivalStation.toLowerCase()))

      if(this.availableFlights.length === 0){
        alert('The route is not available')
        this.router.navigate(['form']);
      }
    });
  }
}
