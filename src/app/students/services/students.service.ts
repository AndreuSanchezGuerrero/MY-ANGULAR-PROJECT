import { Injectable } from '@angular/core';

import {v4 as uuid} from 'uuid';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() {
    this.generateRandomStudents(10);
  }

  students: Student[] = [];

  nombres: string[] = ['Andreu', 'Júlia','Nauel', 'Antonio','Juan', 'María', 'Carlos', 'Ana', 'Luis', 'Elena'];
  apellidos: string[] = ['Sánchez','Romero', 'Hernandez', 'Garcia', 'Ramirez', 'Perez', 'Gonzalez', 'Gutierrez', 'Lopez'];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    student.id = uuid();
    student.getNombreCompleto = () => `${student.nombre} ${student.apellido}`
    this.students.push(student);
  }

  deleteStudent(id: String | undefined): void {
    this.students = this.students.filter(student => student.id !== id);
  }

  filterStudents(filter: string): Student[] {
    return this.students.filter(student =>
      student.nombre.toLowerCase().includes(filter.toLowerCase()) ||
      student.apellido.toLowerCase().includes(filter.toLowerCase())
    );
  }

  generateRandomStudents(count: number): void {
    for (let i = 0; i < count; i++) {
      this.addStudent(this.createRandomStudent());
    }
  }

  createRandomStudent(): Student {
    const nombre = this.nombres[Math.floor(Math.random() * this.nombres.length)];
    const apellido = this.apellidos[Math.floor(Math.random() * this.apellidos.length)];
    const edad = Math.floor(Math.random() * 100);

    const student: Student = {
      id: uuid(),
      nombre,
      apellido,
      edad,
      getNombreCompleto: () => `${nombre} ${apellido}`
    };

    return student;

  }

}
