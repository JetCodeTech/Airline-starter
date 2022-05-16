import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { scheduled } from 'rxjs';
import { BookingDetail } from 'src/app/models/bookingDetail';
import { Passenger } from 'src/app/models/passenger';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.scss']
})
export class BookflightComponent implements OnInit {

  bookingSource:string | undefined;
  bookingDestination:string | undefined;
  bookingScheduleId:number | undefined;
  bookingAirlineName:string | undefined

  passengerForm:FormGroup;

  passengers:Array<Passenger> = [];

  bookingDetail:BookingDetail | undefined;
  
  constructor(private userService:UserService, private router: Router) {
    this.passengerForm = new FormGroup({
      name: new FormControl("", [
        Validators.required
      ]),
      gender: new FormControl("", [
        Validators.required
      ]),
      ageGroup: new FormControl("", [
        Validators.required
      ]),
      mealOption: new FormControl("", [
        Validators.required
      ]),
    })
    this.bookingSource = this.userService.bookingSource;
    this.bookingDestination = this.userService.bookingDestination;
    this.bookingScheduleId = this.userService.bookingScheduleId;
    this.bookingAirlineName = this.userService.bookingAirlineName;
  }

  ngOnInit(): void {
  }

  addPassenger(name:string, gender:string, ageGroup:string, mealOption:string) {
    this.passengers.push(new Passenger(name,gender,ageGroup,mealOption));
  }

  bookTickets() {
    console.log("Passesngers:")
    console.log(this.passengers)
    this.bookingDetail = new BookingDetail(this.bookingSource, this.bookingDestination, this.passengers);
    console.log(this.bookingDetail)
    this.userService.bookTickets(this.bookingDetail, this.bookingScheduleId).subscribe({
      next: (response:any) => {
        alert(`Tickets booked successfully`);
        this.router.navigate(["/", "user", "viewbookings"])
      },
      error: err => {
        alert(`Tickets could not be booked. Please check console logs for now`);
        console.error(err);
      }
    });
  }
}
