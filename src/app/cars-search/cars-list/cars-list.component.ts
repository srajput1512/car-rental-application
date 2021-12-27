import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { SharedService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  static carDetails: any;
  static getCarsFullDetails() {
    throw new Error('Method not implemented.');
  }

  subscription!: Subscription;
  carDetails: any;
  totalCarSearchResult: any;
  formData: any;
  constructor(private sharedService: SharedService, private route: ActivatedRoute,
    private router: Router) {
    this.sharedService.sendDetail.subscribe(result => {
      this.formData = result;
    })
  }

  ngOnInit(): void {
    this.getCarsFullDetails();
  }

  /** Fetch car full details */
  getCarsFullDetails = () => {
    this.subscription  =  this.sharedService.getCarDetails()
      .subscribe((res: any) => {
        this.carDetails = this.formData && this.isObject(this.formData) || Array.isArray(this.formData) ? this.formData : res['carMockItineraries']['CarItineraries'];
        this.totalCarSearchResult = Object.keys(this.carDetails).length;
      });
  }

  /** Check if variable is object */
  isObject(obj: any) {
    return obj instanceof Object && obj.constructor === Object;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
