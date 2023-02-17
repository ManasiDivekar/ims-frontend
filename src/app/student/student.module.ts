import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentviewComponent } from './studentview/studentview.component';
import { StudentaddComponent } from './studentadd/studentadd.component';
import { StudenteditComponent } from './studentedit/studentedit.component';


@NgModule({
  declarations: [StudentComponent, StudentlistComponent, StudentviewComponent, StudentaddComponent, StudenteditComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
