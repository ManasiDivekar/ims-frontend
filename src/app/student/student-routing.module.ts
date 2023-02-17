import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudenteditComponent } from './studentedit/studentedit.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentviewComponent } from './studentview/studentview.component';


const routes: Routes = [{ path: '', 
children:[
  {
    path:'studentlist',
    component:StudentlistComponent
  },
  {
    path:'studentview',
    component:StudentviewComponent
  },
  {
    path:'studentadd',
    component:StudentaddComponent
  },
  {
    path:'studentedit',
    component:StudenteditComponent
  },
  {
    path:'update/:id',
    component:StudenteditComponent
  }
]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
