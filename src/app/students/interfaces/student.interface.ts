export interface Student {
  id?: string;
  nombre: string;
  apellido: string;
  getNombreCompleto(): string;
  edad: number;
}
