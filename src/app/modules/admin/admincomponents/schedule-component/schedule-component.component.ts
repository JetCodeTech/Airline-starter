import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  id: number;
  Source: string;
  Destination: string;
  dispatcheddate: Date;
  arraiveddate: Date;
  startTime: string;
  endTime: string;
  numberOfSeats: string;
  ticketcost: string;
  booked:string
}

@Component({
  selector: 'app-schedule-component',
  templateUrl: './schedule-component.component.html',
  styleUrls: ['./schedule-component.component.scss']
})
export class ScheduleComponentComponent implements OnInit {



  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['Id', 'Source', 'Destination', 'Dispatched Date','Arraived Date', 'Start Time', 'End Time', 'Number Of Seats', 'Ticket Price','Booked', 'Actions'];
  dataSource = this.ELEMENT_DATA;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log();
    
    this.getSchedule();
  }


  getSchedule() {
    this.http.get("http://localhost:3000/schedule").subscribe((res: any) => {
      this.dataSource = res;
      console.log(res,"getttt");
      
    })
  }
  delete(id: any) {
    this.http.delete("http://localhost:3000/schedule/" + id).subscribe((res: any) => {
      console.log(res);
      this.getSchedule();

    })
  }



}
