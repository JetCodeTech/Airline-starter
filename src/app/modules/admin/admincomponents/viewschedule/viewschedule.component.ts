import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/models/schedule';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-viewschedule',
  templateUrl: './viewschedule.component.html',
  styleUrls: ['./viewschedule.component.scss']
})
export class ViewscheduleComponent implements OnInit {

  schedules:Array<Schedule> = [];

  constructor(private adminService:AdminService,private router: Router) {
    this.getSchedules();
  }

  ngOnInit(): void {
  }

  getSchedules() {
    console.log("Displaying list of airlines");
    this.adminService.getSchedules().subscribe({
      next: (response:any) => {
        this.schedules = response;
      },
      error: err => {
        alert(`Error in fetching schedules`);
        console.error(err);
      }
    })
  }

}
