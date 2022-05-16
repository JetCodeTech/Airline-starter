import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookflightComponent } from './usercomponents/bookflight/bookflight.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewbookingsComponent } from './usercomponents/viewbookings/viewbookings.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MyticketComponent } from './usercomponents/myticket/myticket.component';
import {MatTableModule} from '@angular/material/table';

const routes:Routes = [

  {path: "bookflight", component: BookflightComponent},
  {path: "viewbookings", component: ViewbookingsComponent},
  {path:"my-ticket",component:MyticketComponent}
];

@NgModule({
  declarations: [
    BookflightComponent,
    ViewbookingsComponent,
    MyticketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class UserModule { }
