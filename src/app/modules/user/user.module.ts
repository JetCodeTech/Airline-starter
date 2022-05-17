import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookflightComponent } from './usercomponents/bookflight/bookflight.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewbookingsComponent } from './usercomponents/viewbookings/viewbookings.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { SearchflightsComponent } from './usercomponents/searchflights/searchflights.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { BookmoduleComponent } from './usercomponents/bookmodule/bookmodule.component';
import { MyticketComponent } from './usercomponents/myticket/myticket.component';

const routes: Routes = [

  { path: "bookflight", component: BookflightComponent },
  { path: "viewbookings", component: ViewbookingsComponent },
  { path: "my-ticket", component: MyticketComponent },
  { path: "search-flights", component: SearchflightsComponent }
];

@NgModule({
  declarations: [
    BookflightComponent,
    ViewbookingsComponent,
    SearchflightsComponent,
    BookmoduleComponent,
    SearchflightsComponent,
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
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatTableModule
  ]
})
export class UserModule { }
