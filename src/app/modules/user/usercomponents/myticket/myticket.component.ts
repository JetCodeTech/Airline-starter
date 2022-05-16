import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  id:number
  flightName: string;
  date: any;
 
}

@Component({
  selector: 'app-myticket',
  templateUrl: './myticket.component.html',
  styleUrls: ['./myticket.component.scss']
})


export class MyticketComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['id','FlightName', 'date','Action'];
  dataSource = this.ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
