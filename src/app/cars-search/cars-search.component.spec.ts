import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarsSearchComponent } from './cars-search.component';

describe('CarsSearchComponent', () => {
  let component: CarsSearchComponent;
  let fixture: ComponentFixture<CarsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarsSearchComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsSearchComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.carRentalSearchForm.valid).toBeFalsy();
  });

  it('Pickuplocation field validity', () => {
    let pickupLocation = component.carRentalSearchForm.controls['pickupLocation'];
    expect(pickupLocation.valid).toBeFalsy();
    pickupLocation.setValue("");
    expect(pickupLocation.hasError('required')).toBeTruthy();
  });

  it('pickupDate field validity', () => {
    let pickupDate = component.carRentalSearchForm.controls['pickupDate'];
    expect(pickupDate.valid).toBeFalsy();
    pickupDate.setValue("");
    expect(pickupDate.hasError('required')).toBeTruthy();
  });

  it('pickupDate field validity', () => {
    let pickupDate = component.carRentalSearchForm.controls['pickupDate'];
    expect(pickupDate.valid).toBeFalsy();
    pickupDate.setValue("");
    expect(pickupDate.hasError('required')).toBeTruthy();
  });


  it('dropOffDate field validity', () => {
    let dropOffDate = component.carRentalSearchForm.controls['dropOffDate'];
    expect(dropOffDate.valid).toBeFalsy();
    dropOffDate.setValue("");
    expect(dropOffDate.hasError('required')).toBeTruthy();
  });


  it('pickupTime field validity', () => {
    let pickupTime = component.carRentalSearchForm.controls['pickupTime'];
    expect(pickupTime.valid).toBeFalsy();
    pickupTime.setValue("");
    expect(pickupTime.hasError('required')).toBeTruthy();
  });

  it('dropOffTime field validity', () => {
    let dropOffTime = component.carRentalSearchForm.controls['dropOffTime'];
    expect(dropOffTime.valid).toBeFalsy();
    dropOffTime.setValue("");
    expect(dropOffTime.hasError('required')).toBeTruthy();
  });

  it('driverAge field validity', () => {
    let driverAge = component.carRentalSearchForm.controls['pickdriverAgeupDate'];
    expect(driverAge.valid).toBeFalsy();
    driverAge.setValue("");
    expect(driverAge.hasError('required')).toBeTruthy();
  });

});