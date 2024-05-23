import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    { title: 'Angular Basics', description: 'Learn the basics of Angular framework.' },
    { title: 'Advanced Angular', description: 'Deep dive into advanced topics of Angular.' },
    { title: 'RxJS Fundamentals', description: 'Understand reactive programming with RxJS.' }
  ];
}
