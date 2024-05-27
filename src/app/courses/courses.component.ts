import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../Services/courses.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, RouterLink, RouterOutlet],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

  courses: any = [];

  constructor(private coursesService: CoursesService, private route: ActivatedRoute){

  }

  ngOnInit(){
    // this.courses = this.coursesService.courses;
    // this.coursesService.getAllCourses().then((data: any) => {
    //   this.courses = data;
    // });
    this.courses = this.route.snapshot.data['courses']
  }

}
