import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './admincomponents/addflight/addflight.component';
import { ViewflightsComponent } from './admincomponents/viewflights/viewflights.component';
import { AddscheduleComponent } from './admincomponents/addschedule/addschedule.component';
import { ViewscheduleComponent } from './admincomponents/viewschedule/viewschedule.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { DashboardComponent } from './admincomponents/dashboard/dashboard.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { ScheduleComponentComponent } from './admincomponents/schedule-component/schedule-component.component';

import { FlightDashboardComponent } from './admincomponents/flight-dashboard/flight-dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "add-flight", component: AddflightComponent },
  { path: "view-flights", component: ViewflightsComponent },
  { path: "add-schedule", component: AddscheduleComponent },
  { path: "view-schedule", component: ViewscheduleComponent },
  { path: "create-admin", component: RegisterComponent },
  { path: "schedule", component: ScheduleComponentComponent },
  { path: "flight-dashboard", component: FlightDashboardComponent },
];

@NgModule({
  declarations: [
    AddflightComponent,
    ViewflightsComponent,
    AddscheduleComponent,
    ViewscheduleComponent,
    DashboardComponent,
    ScheduleComponentComponent,
    FlightDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatSortModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class AdminModule { }
