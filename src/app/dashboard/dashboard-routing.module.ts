import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

import { DashboardComponent } from './dashboard.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { TeacherdashboardComponent } from './teacherdashboard/teacherdashboard.component';

const routes: Routes = [
  { 
  path: '',
  
   children:[
    {
        path:'',
        component:AdmindashboardComponent
    },
    {
    path:'admindashboard',
    component:AdmindashboardComponent
   },
  {
    path:'teacherdashboard',
    component:TeacherdashboardComponent
  },
  {
    path:'studentdashboard',
    component:StudentdashboardComponent
  }
  ]
   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
