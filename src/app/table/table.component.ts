import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  birthday = new Date();
  dataSource;

  constructor(myserviceService: MyserviceService) {
    this.dataSource = myserviceService.getData();
  }

}
