import { Component } from '@angular/core';
import { SharedService } from '../services/shared-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  formData: any;
  isObjEmpty: boolean = false;

  constructor(private sharedService: SharedService) { }

  /** Here we subscribing to subject behaviour data for showing result on top of header */ 
  ngOnInit() {
    this.sharedService.currentMessage.subscribe(result => {
      this.formData = this.isObject(result) ? result : JSON.parse(localStorage.getItem('form-details') || '{}');
      this.isObjEmpty = Object.keys(this.formData).length === 0
      console.log(this.formData)
    })
  }

  /** Check if it is object or not */
  isObject(obj: any) {
    return obj instanceof Object && obj.constructor === Object;
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/