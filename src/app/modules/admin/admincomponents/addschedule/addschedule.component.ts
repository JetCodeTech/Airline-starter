import { HttpClient } from '@angular/common/http';
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

  constructor(private adminService: AdminService, private router: Router,private http:HttpClient) {
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
      flightName: new FormControl("", [
        Validators.required
      ]),
      startTime: new FormControl("", [
        Validators.required
      ]),
      endTime: new FormControl("", [
        Validators.required
      ]),
      numberOfSeats: new FormControl(0, [
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
    this.http.post("http://localhost:3000/schedule",this.addscheduleForm.value).subscribe(res=>{
console.log(res,"resSchedule")
this.addscheduleForm.reset()
    })


  }


}
