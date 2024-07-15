import { Component } from '@angular/core';

@Component({
  selector: 'app-main-pages',
  styleUrls: ['./main-pages.component.css'],
  template: `
              <div>
  <h1>Matriculación de alumnos</h1>
  <div class="container">
    <app-add-students></app-add-students>
  </div>
  <div class="container">
    <app-list-students></app-list-students>
  </div>
</div>

`
})
export class MainPagesComponent { }
