import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

  courses: any;

  constructor(private service: CoursesService){

  }

  ngOnInit(){
    this.courses = this.service.courses;
  }

}
