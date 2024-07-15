import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../interfaces/student.interface';

@Component({
  selector: 'app-list-students',
  styleUrls: ['./list-students.component.css'],
  template: `
    <div class="list-container">
      <h2>List Students</h2>
      <input type="text" [(ngModel)]="filter" (input)="filterStudents()" placeholder="Buscar estudiante por nombre" class="search-input">
      <ul class="students-list">
        <li *ngFor="let student of students" class="student-item">
          {{ student.getNombreCompleto() }} - {{ student.edad }} años
          <button (click)="deleteStudent(student.id)" class="btn-delete">Eliminar</button>
        </li>
      </ul>
    </div>
  `
})
export class ListStudentsComponent implements OnInit {

  students: Student[] = [];

  filter: string = '';

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.students = this.studentsService.getStudents();
  }

  deleteStudent(id: String | undefined): void {
    this.studentsService.deleteStudent(id);
    this.students = this.studentsService.getStudents();
    this.filterStudents();
  }

  filterStudents(): void {
    if (this.filter) {
      this.students = this.studentsService.filterStudents(this.filter);
    } else {
      this.students = this.studentsService.getStudents();
    }
  }
}
