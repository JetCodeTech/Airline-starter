import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  bookingForm!:FormGroup;

  passengers:Array<Passenger> = [];

  bookingDetail:BookingDetail | undefined;
  
  constructor(private userService:UserService, private router: Router,private fb:FormBuilder) {
   this.bookingForm = this.fb.group({
    name: new FormControl("",[Validators.required]),
    gender: new FormControl("",[Validators.required]),
    ageGroup: new FormControl("",[Validators.required]),
    mealOption: new FormControl("",[Validators.required])
   })
  }

  ngOnInit(): void {
  }


  bookFlight()
  {
    let val = this.bookingForm.value
    console.log(val,"vall flight");
    
  }


  

}
