import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  template: `     <div class="container mt-5 mb-5 text-center">
                    <app-main-pages></app-main-pages>
  `,
})
export class AppComponent {
  title = 'Matricualción de alumnos';
}

