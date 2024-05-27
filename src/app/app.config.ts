import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { routes } from './app-routing.module';
import { AuthService } from './auth.service';
import { CourseGuardService } from './course-guard.service';
import { CanDeactivateGuardService } from './candeactivate-guard.service';
import { CourseResolveService } from './course-resolve.service';
import { CoursesService } from './Services/courses.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), AuthService, CourseGuardService, CanDeactivateGuardService, CourseResolveService, CoursesService],
};