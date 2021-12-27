import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { async, of } from 'rxjs';
import { SharedService } from 'src/app/services/shared-service.service';

import { CarsListComponent } from './cars-list.component';

describe('CarsListComponent', () => {
  let component: CarsListComponent;
  let fixture: ComponentFixture<CarsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all car details', fakeAsync(inject([SharedService], (service: SharedService) => {
    let actual: any = [];
    service.getCarDetails().subscribe(result => {
      actual = result;
    });
    tick();
    expect(actual).toEqual([]);
  })));
});


