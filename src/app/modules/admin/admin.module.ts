import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './admincomponents/addflight/addflight.component';
import { ViewflightsComponent } from './admincomponents/viewflights/viewflights.component';
import { AddscheduleComponent } from './admincomponents/addschedule/addschedule.component';
import { ViewscheduleComponent } from './admincomponents/viewschedule/viewschedule.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { DashboardComponent } from './admincomponents/dashboard/dashboard.component';


const routes: Routes = [
  {path:'',component:DashboardComponent},
  { path: "addflight", component: AddflightComponent },
  { path: "viewflights", component: ViewflightsComponent },
  { path: "addschedule", component: AddscheduleComponent },
  { path: "viewschedule", component: ViewscheduleComponent },
  { path: "create-admin", component: RegisterComponent }

];

@NgModule({
  declarations: [
    AddflightComponent,
    ViewflightsComponent,
    AddscheduleComponent,
    ViewscheduleComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  
  ]
})
export class AdminModule { }
