import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CoursesService } from '../../Services/courses.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  providers: [CoursesService]
})
export class CourseComponent implements OnInit, OnDestroy {
  course: any;
  courseId: any;
  RouteParamObs: any;
  editMode: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private service: CoursesService, private router: Router){

  }

  ngOnInit(){
    // this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    // // this.courseId = this.activatedRoute.snapshot.params['id'];
    // this.course = this.service.courses.find(x => x.id == this.courseId)
    this.RouteParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id');
      this.course = this.service.courses.find(x => x.id == this.courseId);
    });

    //snapshot
    // this.editMode = Boolean(this.activatedRoute.snapshot.paramMap.get('edit'));
    // Observable
    this.activatedRoute.queryParamMap.subscribe((param) =>{
      this.editMode = Boolean(param.get('edit'));
    })
    console.log(this.editMode);
  }

  ngOnDestroy(){
    this.RouteParamObs.unsubscribe();
  }

  appendQueryParam(){
    this.router.navigate(['/courses/course', this.courseId], {queryParams: {edit: true}})
  }

}
