import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { SharedService } from 'src/app/services/shared-service.service';
import { CarsListComponent } from '../cars-list/cars-list.component';

@Component({
  selector: 'app-car-sort',
  templateUrl: './car-sort.component.html',
  styleUrls: ['./car-sort.component.css'],
  providers: [CarsListComponent],
})
export class CarSortComponent implements OnInit {
  carDetails: any;
  totalCarSearchResult: any;
  constructor(private sharedService: SharedService, public router: Router) {
   }
  sortArray = ['Price: lowest', 'Price: highest', 'Renatal Company: A - Z', 'Renatal Company: Z - A', 'Car Type: A - Z', 'Car Type: Z - A']

  ngOnInit(): void {
    
  }


  /** Here we handle the case of filters */
  handleChangeCarSort(evt: any) {
    switch (String(evt)) {
      case 'Price: lowest':
        this.sortResult('1');
        break;
      case 'Price: highest':
        this.sortResult('2');
        break;
      case 'Renatal Company: A - Z':
        this.sortResult('3');
        break;
      case 'Renatal Company: Z - A':
        this.sortResult('4');
        break;
      case 'Car Type: A - Z':
        this.sortResult('5');
        break;
      case 'Car Type: Z - A':
        this.sortResult('6');
        break;
      default:
        console.log("No Result found!!");
        break;
    }
  }

  /** Here we sort the result as per our code i.e filter we selected */
  sortResult = (code: any) => {
    this.sharedService.getCarDetails().pipe(map((result: any) => {
      return result['carMockItineraries']['CarItineraries'].sort((a: any, b: any) => {
        if (code == '3') {
          if (a.vehicle.name < b.vehicle.name) { return -1; }
          if (a.vehicle.name > b.vehicle.name) { return 1; }
        }
        if (code == '4') {
          if (a.vehicle.name > b.vehicle.name) { return -1; }
          if (a.vehicle.name < b.vehicle.name) { return 1; }
        }
        if (code == '1') {
          if (a.fare.totalAmount < b.fare.totalAmount) { return -1; }
          if (a.fare.totalAmount > b.fare.totalAmount) { return 1; }
        }
        if (code == '2') {
          if (a.fare.totalAmount > b.fare.totalAmount) { return -1; }
          if (a.fare.totalAmount < b.fare.totalAmount) { return 1; }
        }
        if (code == '5') {
          if (a.vehicle.type < b.vehicle.type) { return -1; }
          if (a.vehicle.type > b.vehicle.type) { return 1; }
        }
        if (code == '6') {
          if (a.vehicle.type > b.vehicle.type) { return -1; }
          if (a.vehicle.type < b.vehicle.type) { return 1; }
        }
        return 0;

      });
    }
    )).subscribe((res: any) => {
      this.carDetails = res;
      this.sharedService.sendFormDetails(this.carDetails);
      this.router.navigate(['cars-list']);
    });
  }
}
