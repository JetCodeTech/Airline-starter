import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toast,TYPE } from '../../../../utils/utils'

export interface PeriodicElement {
  id: number;
  name: string;
  Contact: number;

}


@Component({
  selector: 'app-flight-dashboard',
  templateUrl: './flight-dashboard.component.html',
  styleUrls: ['./flight-dashboard.component.scss']
})


export class FlightDashboardComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['id','name', 'contact','Action'];
  dataSource = this.ELEMENT_DATA;


constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.getFlightData()
  }
getFlightData(){
  this.http.get(" http://localhost:3000/addFlight").subscribe((res:any)=>{
    this.dataSource = res
    console.log(res,"result")
  })
}
deleteFlightData(id:any){
this.http.delete("http://localhost:3000/addFlight/"+id).subscribe((res)=>{
  console.log(res,"deleteItem")
  if (res) {
    toast(TYPE.SUCCESS, false, 'Flight Deleted Successfully')
  }
  this.getFlightData()
})

}
}
