import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { countryAddress } from "src/assets/address"
import { driver_age } from "src/app/driver-age"
import { Router } from '@angular/router';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css'],
})
export class CarsSearchComponent implements OnInit {
  carRentalSearchForm!: FormGroup;
  formControlItem: FormControl = new FormControl("");
  required: boolean = !1;
  locationAddress: any;
  driverAge: any;

  submitted = false;


  constructor(private formBuilder: FormBuilder,private router: Router, private sharedService: SharedService) { }


  ngOnInit(): void {
    localStorage.setItem('form-details', '');
    this.sharedService.changeMessage('');
    this.formVarification();
    this.locationAddress = countryAddress;
    this.driverAge = driver_age;
  }

  get f() { return this.carRentalSearchForm.controls; }

  /** We are doing form verification and validation here  */
  formVarification = () => {
    this.carRentalSearchForm = this.formBuilder.group({
      pickupLocation: ['', [Validators.required]],
      pickupDate: ['', [Validators.required]],
      dropOffDate: ['', [Validators.required]],
      pickupTime: ['', [Validators.required]],
      dropOffTime: ['', [Validators.required]],
      driverAge: ['', [Validators.required]]
    });
  }


  /** Here we search result and store it into localstorage for further use and check if form is valid or not */
  searchCarForRental = () => {
    this.submitted = true;
    if (this.carRentalSearchForm.invalid) {
      return;
    }
    localStorage.setItem('form-details', JSON.stringify(this.carRentalSearchForm.value))
    this.sharedService.changeMessage(this.carRentalSearchForm.value);
    this.router.navigate(['cars-list']);
  }

  /** Time picker open control */
  openFromIcon(timepicker: { open: () => void }) {
    if (!this.formControlItem.disabled) {
      timepicker.open();
    }
  }

  onClear($event: Event) {
    this.formControlItem.setValue(null);
  }
}
