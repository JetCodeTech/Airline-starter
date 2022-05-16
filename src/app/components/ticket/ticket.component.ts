import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
allData = {
name:"arun",
FlightName:"Air india",
seat:"2",
date:new Date(),
source:"india",
destination:"us"

}  
  constructor() { }

  ngOnInit(): void {
  }

}
