import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getItem, toast, TYPE } from 'src/app/utils/utils';

@Component({
  selector: 'app-bookmodule',
  templateUrl: './bookmodule.component.html',
  styleUrls: ['./bookmodule.component.scss']
})
export class BookmoduleComponent implements OnInit {
  name = ''
  constructor( public dialogRef: MatDialogRef<BookmoduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private http:HttpClient) { }

  ngOnInit(): void {
  }


  Submit(){
    let user = getItem('auth')
    this.http.get("http://localhost:3000/register/"+user.userId).subscribe((res:any)=>{
      if(res){
       res.tickets.push({
          name: this.name,
          source: this.data.source,
          destination: this.data.destination,
          date: this.data.dispatcheddate,
          seat: (this.data.booked + 1) - this.data.booked,
        })
        this.http.put("http://localhost:3000/register/"+user.userId,res).subscribe(val=>{
          toast(TYPE.SUCCESS,false,"Ticket Booked Successfully")
          this.data.booked = this.data.booked - 1
          this.http.put("http://localhost:3000/schedule/"+ this.data.id,this.data).subscribe(value=>{
            console.log(value)
          })
          this.dialogRef.close()
        }
        )
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
