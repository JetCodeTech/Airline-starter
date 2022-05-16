import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.scss']
})
export class AddflightComponent implements OnInit {

  addflightForm:FormGroup;

  constructor(private adminService:AdminService,private router: Router) {
    this.addflightForm = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(4)
      ]),
      contact: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]*")
      ])

    })
  }

  ngOnInit(): void {
  }

  // addAirline(name:string, contact:string) {
  //   console.log("Flight Name: " + name);
  //   this.adminService.addAirline(name,contact).subscribe({
  //     next: (response:any) => {
  //       alert(`Airline added successfully`);
  //       this.router.navigate(["/", "admin", "viewflights"])
  //     },
  //     error: err => {
  //       alert(`Airline could not be added. Check console logs for now`);
  //       console.error(err);
  //     }
  //   })
  // }

  addAirline()
  {
    let addflight = this.addflightForm.value
    console.log(addflight,"addflight")
  }
}