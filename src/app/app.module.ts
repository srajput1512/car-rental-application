import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CarsSearchComponent } from './cars-search/cars-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from 'jquery';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { CarsListComponent } from './cars-search/cars-list/cars-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarSortComponent } from './cars-search/car-sort/car-sort.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
const lang = "en-US";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    NgxMatTimepickerModule.setLocale(lang),
    RouterModule.forRoot([
      { path: '', component: CarsSearchComponent },
      { path: 'search', component: CarsSearchComponent },
      { path: 'cars-list', component: CarsListComponent, canActivate: [AuthGuard] },
      { path: 'cars-sort', component: CarSortComponent, canActivate: [AuthGuard] },
      {
        path: '**', pathMatch: 'full',
        component: PageNotFoundComponent
      }
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CarsSearchComponent,
    NavBarComponent,
    CarsListComponent,
    CarSortComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
