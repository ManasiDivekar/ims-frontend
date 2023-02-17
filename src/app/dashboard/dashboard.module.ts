import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';


@NgModule({
  declarations: [DashboardComponent, AdmindashboardComponent, TeacherdashboardComponent, StudentdashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
