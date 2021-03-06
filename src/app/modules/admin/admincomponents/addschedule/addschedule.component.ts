import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Airline } from 'src/app/models/airline';
import { Schedule } from 'src/app/models/schedule';
import { AdminService } from 'src/app/services/admin.service';
import { toast, TYPE } from '../../../../utils/utils'



@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.scss']
})
export class AddscheduleComponent implements OnInit {

  addscheduleForm: FormGroup;

  airline: Airline | undefined;

  flights: any = [];

  constructor(private adminService: AdminService, private router: Router, private http: HttpClient) {
    this.addscheduleForm = new FormGroup({
      source: new FormControl("", [
        Validators.required
      ]),
      destination: new FormControl("", [
        Validators.required
      ]),
      dispatcheddate: new FormControl("", [
        Validators.required
      ]),
      arraiveddate: new FormControl("", [
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
      numberOfSeats: new FormControl(1, [
        Validators.required
      ]),
      ticketCost: new FormControl("", [
        Validators.required
      ]),
      booked: new FormControl(0)
    })
    this.airline = this.adminService.airlineForScheduling;
    this.getFlights()
  }

  ngOnInit(): void {
  }

  addSchedule() {
    this.addscheduleForm.value.booked = this.addscheduleForm.value.numberOfSeats
    this.http.post("http://localhost:3000/schedule", this.addscheduleForm.value).subscribe(res => {
      if (res) {

        this.router.navigate(['/admin/schedule'])
        toast(TYPE.SUCCESS, false, 'Schedule Saved Successfully')
      }
    })
    this.addscheduleForm.reset();
  }

  getFlights() {
    this.http.get("http://localhost:3000/addFlight").subscribe((res: any) => {
      console.log(res, 'tee')
      this.flights = res;
    })
  }
}
