import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Car } from './car';
import { Observable } from 'rxjs/Observable';
 
@Injectable()
export class CarService {
 
  private carUrl: string;
 
  constructor(private http: HttpClient) {
    this.carUrl = 'http://ec2-18-188-202-13.us-east-2.compute.amazonaws.com:8080/superemp/employees';
  }
 
  public findAll(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carUrl);
  }
 
  public save(car: Car) {
    return this.http.post<Car>(this.carUrl, car);
  }
}
