import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Flight } from '../../models/flight.module';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  public inputForm: FormGroup;
  public flightList: Flight[]=[];
  public availableFlights: Flight[]=[];

  constructor(private api:ApiService, private formBuilder: FormBuilder, private router: Router ){
    this.inputForm = this.formBuilder.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
    })
  }

  submitForm(){
    if (this.inputForm.valid) {
      let origin = this.inputForm.value.origin;
      let destination = this.inputForm.value.destination;
      this.inputForm.setValidators(this.validateValues.bind(this));
      this.router.navigate([`flights/origin/${origin}/destination/${destination}`]);
    } else {
      alert('Invalid form');
    }
  }

  uppercaseValidator(control: FormControl) {
    if (control.value && control.value !== control.value.toUpperCase() && control.dirty) {
      return { uppercase: true };
    }
    return null;
  }

  validateValues() {
    let origin = this.inputForm.value.origin;
    let destination = this.inputForm.value.destination;

    if (origin && destination && origin === destination) {
      return { sameValue: true };
    }

    return null;
  }
}

