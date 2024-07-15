import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { AddStudentsComponent } from './components/add-students/add-students.component';
import { FormsModule } from '@angular/forms';
import { MainPagesComponent } from './pages/main-pages.component';
import { StudentsService } from './services/students.service';



@NgModule({
  declarations: [
    ListStudentsComponent,
    AddStudentsComponent,
    MainPagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [ StudentsService ],
  exports: [
    MainPagesComponent
  ]
})
export class AlumnesModule { }
