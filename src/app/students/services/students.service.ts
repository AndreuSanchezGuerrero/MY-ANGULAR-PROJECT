import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() {

  }

  students: Student[] = [];

  nombres: string[] = ['Andreu', 'Júlia','Nauel', 'Antonio','Juan', 'María', 'Carlos', 'Ana', 'Luis', 'Elena'];
  apellidos: string[] = ['Sánchez','Romero', 'Hernandez', 'Garcia', 'Ramirez', 'Perez', 'Gonzalez', 'Gutierrez', 'Lopez'];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  deleteStudent(id: String): void {
    this.students = this.students.filter(student => student.id !== id);
  }

  filterStudents(filter: string): Student[] {
    return this.students.filter(student => student.getNombreCompleto().toLowerCase().includes(filter.toLowerCase()));
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
      nombre,
      apellido,
      edad,
      getNombreCompleto: () => `${nombre} ${apellido}`
    };

    return student;

  }

}
