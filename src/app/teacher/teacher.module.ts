import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { TeacherviewComponent } from './teacherview/teacherview.component';
import { TeacheraddComponent } from './teacheradd/teacheradd.component';
import { TeachereditComponent } from './teacheredit/teacheredit.component';


@NgModule({
  declarations: [TeacherComponent, TeacherlistComponent, TeacherviewComponent, TeacheraddComponent, TeachereditComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule { }
