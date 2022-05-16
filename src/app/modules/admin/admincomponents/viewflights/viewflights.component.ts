import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'src/app/models/airline';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.scss']
})
export class ViewflightsComponent implements OnInit {

  airlines:Array<Airline> = [];

  constructor(private adminService:AdminService,private router: Router) {
    this.getAirlines()
  }

  ngOnInit(): void {
  }

  getAirlines() {
    console.log("Displaying list of airlines");
    this.adminService.getAirlines().subscribe({
      next: (response:any) => {
        this.airlines = response;
      },
      error: err => {
        alert(`Error in fetching airlines`);
        console.error(err);
      }
    })
  }

  addScheduleForAirline(airlineId:number, airlineName:string, airlineContactNumber:string, airlineBlocked:boolean) {
    this.adminService.airlineForScheduling = new Airline(airlineId, airlineName, airlineContactNumber, airlineBlocked);
    console.log(this.adminService.airlineForScheduling)
    this.router.navigate(["/", "admin", "addschedule"])
  }


}
