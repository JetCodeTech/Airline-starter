import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/modules/admin/admincomponents/schedule-component/schedule-component.component';
import { BookmoduleComponent } from '../bookmodule/bookmodule.component';



@Component({
  selector: 'app-searchflights',
  templateUrl: './searchflights.component.html',
  styleUrls: ['./searchflights.component.scss']
})
export class SearchflightsComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['Id', 'Source', 'Destination', 'Flight Date', 'Return Date', 'Available Tickets', 'Ticket Price', 'Actions'];
  dataSource: any = this.ELEMENT_DATA;
  searchedData = [];

  searchflights!: FormGroup
  constructor(private fb: FormBuilder, private http: HttpClient, public dialog: MatDialog) {
    this.searchflights = this.fb.group({
      source: new FormControl(""),
      destination: new FormControl(""),
      fdate: new FormControl(""),
      rdate: new FormControl("")
    })
  }

  openDialog(element: any): void {
    console.log(element, 'sds')
    const dialogRef = this.dialog.open(BookmoduleComponent, {
      width: '250px',
      data: element,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }





  searchData() {
    this.searchedData = []
    this.searchedData = this.dataSource.map((res: any) => {
      if ((this.searchflights.value.source.toLowerCase().length && res.source.toLowerCase().includes(this.searchflights.value.source.toLowerCase())) || (this.searchflights.value.destination.toLowerCase().length && res.destination.toLowerCase().includes(this.searchflights.value.destination.toLowerCase())) || (this.searchflights.value.fdate.length && res.dispatcheddate == this.searchflights.value.fdate) || (this.searchflights.value.rdate.length && res.arraiveddate == this.searchflights.value.rdate)) {
        return res
      } else {
        return {}
      }
    })
    console.log(this.dataSource)

  }



  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.http.get(" http://localhost:3000/schedule").subscribe((res: any) => {
      this.dataSource = res
      this.searchedData = res

      // this.dataSource =  this.searchflights.value;
    })
  }

  book() {


  }

}
