import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';



@NgModule({
  declarations: [
    ListStudentsComponent,
    AddStudentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AlumnesModule { }
