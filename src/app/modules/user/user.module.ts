import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookflightComponent } from './usercomponents/bookflight/bookflight.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewbookingsComponent } from './usercomponents/viewbookings/viewbookings.component';

const routes:Routes = [

  {path: "bookflight", component: BookflightComponent},
  {path: "viewbookings", component: ViewbookingsComponent}
];

@NgModule({
  declarations: [
    BookflightComponent,
    ViewbookingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
