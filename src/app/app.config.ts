import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
import { routes } from './app-routing.module';
import { AuthService } from './auth.service';
import { CourseGuardService } from './course-guard.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), AuthService, CourseGuardService],
};