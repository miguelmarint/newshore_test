import { Component, Input} from '@angular/core';
import { Flight } from '../../models/flight.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input('availableFlights') availableFlights: Flight[]=[];

  constructor(){}
}
