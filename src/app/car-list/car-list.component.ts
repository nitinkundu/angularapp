import { Component, OnInit } from '@angular/core';
import { Car } from '../car';

import { ConfigService } from "../config/service"
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

 
@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
 
  car: Car[];
  employees: any;
 
  constructor( private configService: ConfigService) {
  }
 
  ngOnInit() {
   


    this.configService.getConfig().subscribe(data => {
      this.employees = data
  console.log("Response",data)
  console.log("Employees", this.employees)

    })
  console.log(this.employees)
  }
}