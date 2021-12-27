import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject("default message");
  currentMessage = this.messageSource.asObservable();

  private messageSourceSendFormDetails = new BehaviorSubject("default message");
  sendDetail = this.messageSourceSendFormDetails.asObservable();

  constructor(private httpService: HttpClient) { }

  getCarDetails = () => {
    return this.httpService.get('../../assets/carMockItineraries.json');
  }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  sendFormDetails(message: string) {
    this.messageSourceSendFormDetails.next(message)
  }
  
  
}
