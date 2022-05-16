import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Airline } from 'src/app/models/airline';
import { Schedule } from 'src/app/models/schedule';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.scss']
})
export class AddscheduleComponent implements OnInit {

  addscheduleForm: FormGroup;

  airline: Airline | undefined;

  constructor(private adminService: AdminService, private router: Router) {
    this.addscheduleForm = new FormGroup({
      source: new FormControl("", [
        Validators.required
      ]),
      destination: new FormControl("", [
        Validators.required
      ]),
      flightDate: new FormControl("", [
        Validators.required
      ]),
      startTime: new FormControl("", [
        Validators.required
      ]),
      endTime: new FormControl("", [
        Validators.required
      ]),
      numberOfSeats: new FormControl("", [
        Validators.required
      ]),
      ticketCost: new FormControl("", [
        Validators.required
      ])
    })
    this.airline = this.adminService.airlineForScheduling;
  }

  ngOnInit(): void {
  }

  addSchedule()
  {
    let adds = this.addscheduleForm.value
    console.log(adds,"adds")
  }

  // addSchedule(source:string, destination:string, flightDate:string, startTime:string, endTime:string, numberOfSeats:string, numberOfVacantSeats:string, ticketCost:string) {
  //   this.airline = this.adminService.airlineForScheduling;
  //   let schedule = new Schedule(
  //                                 0,
  //                                 this.airline,
  //                                 source,
  //                                 destination,
  //                                 new Date(flightDate),
  //                                 startTime,
  //                                 endTime,
  //                                 parseInt(numberOfSeats),
  //                                 parseInt(numberOfSeats),
  //                                 parseFloat(ticketCost)
  //                             );
  //     this.adminService.addSchedule(schedule).subscribe({
  //       next: (response:any) => {
  //         alert(`Schedule added successfully`);
  //         this.router.navigate(["/", "admin", "viewschedule"])
  //       },
  //       error: err => {
  //         alert(`Airline could not be added. Please check console logs for now`);
  //         console.error(err);
  //       }
  //     });
  // }
}
