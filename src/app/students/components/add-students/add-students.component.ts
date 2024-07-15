import { Component, NgModule } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../interfaces/student.interface';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-students',
  styleUrl: './add-students.component.css',
  template: `
<div class="form-container">
  <h2>Add Student</h2>
  <form (ngSubmit)="addStudent()">

    <div class="form-group">
      <input type="text" [(ngModel)]="newStudent.nombre" name="nombre" required class="form-control mb-2" placeholder="Nombre">
    </div>

    <div class="form-group">
      <input  type="text"
              [(ngModel)]="newStudent.apellido"
              name="apellido"
              required
              class="form-control mb-2"
              placeholder="Apellidos">
    </div>

    <div class="form-group">
      <input  type="number"
            [(ngModel)]="newStudent.edad"
            name="edad"
            required
            class="form-control mb-2"
            placeholder="Edad">
    </div>

    <button type="submit" class ="btn btn-primary">Add Student</button>
  </form>
</div>

  `
})
export class AddStudentsComponent {

  newStudent: Student = {
    id: " ",
    nombre: '',
    apellido: '',
    getNombreCompleto: () => '',
    edad: 0
  };

  constructor(private studentsService: StudentsService) {}

  addStudent(): void {
    this.studentsService.addStudent(this.newStudent);

    this.newStudent = {
      id: " ",
      nombre: '',
      apellido: '',
      getNombreCompleto: () => '',
      edad: 0
    };
  }
}
