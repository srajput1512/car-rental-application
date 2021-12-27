import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSortComponent } from './car-sort.component';

describe('CarSortComponent', () => {
  let component: CarSortComponent;
  let fixture: ComponentFixture<CarSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
