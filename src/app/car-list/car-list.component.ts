import { Component, OnInit } from '@angular/core';

import { CarService } from '../car.service';
 
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
 
  car: any;
 
  constructor(private carService: CarService) {
  }
 
  ngOnInit() {
    this.carService.findAll().subscribe(data => {
      this.car = data;
     console.log(this.car);
    });
  }
}
