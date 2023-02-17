import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacheraddComponent } from './teacheradd/teacheradd.component';
import { TeachereditComponent } from './teacheredit/teacheredit.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TeacherviewComponent } from './teacherview/teacherview.component';



const routes: Routes = [{ path: '', 
children:[{
  path:'teacherlist',
  component:TeacherlistComponent
},
{
  path:'teacheradd',
  component:TeacheraddComponent
},
{
  path:'teacherview',
  component:TeacherviewComponent
},
{
  path:'teacheredit',
  component:TeachereditComponent
}
]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
