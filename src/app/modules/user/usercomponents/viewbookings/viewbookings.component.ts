import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewbookings',
  templateUrl: './viewbookings.component.html',
  styleUrls: ['./viewbookings.component.scss']
})
export class ViewbookingsComponent implements OnInit {

  tickets:Array<Ticket> = [];

  constructor(private userService:UserService,private router: Router) {
    this.getTickets();
  }

  ngOnInit(): void {
  }

  getTickets() {
    console.log("Displaying list of airlines");
    this.userService.getTickets().subscribe({
      next: (response:any) => {
        this.tickets = response;
      },
      error: err => {
        alert(`Error in fetching airlines`);
        console.error(err);
      }
    })
  }


}
