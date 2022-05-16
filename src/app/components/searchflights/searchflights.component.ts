import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchflights',
  templateUrl: './searchflights.component.html',
  styleUrls: ['./searchflights.component.scss']
})
export class SearchflightsComponent implements OnInit {

  searchflights!:FormGroup
  constructor(private fb:FormBuilder) {
    this.searchflights = this.fb.group({
      source:new FormControl("",[Validators.required]),
      destination:new FormControl("",[Validators.required]),
      fdate:new FormControl("",[Validators.required]),
      rdate:new FormControl("",[Validators.required])
    })
   }

   searchData()
   {
     console.log(this.searchflights.value);
     
   }



  ngOnInit(): void {
  }

}
