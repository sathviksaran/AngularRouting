import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../Services/courses.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  providers: [CoursesService]
})
export class CourseComponent implements OnInit {
  course: any;
  courseId: any;

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService){

  }

  ngOnInit(){
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.courseId = this.activatedRoute.snapshot.params['id'];
    this.course = this.service.courses.find(x => x.id == this.courseId)
  }

}
