import { Component, Input} from '@angular/core';
import { Flight } from '../../models/flight.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input('availableFlights') availableFlights: Flight[]=[];

  constructor(private router:Router){}

  back(){
    this.router.navigate(['form']);
  }
}
