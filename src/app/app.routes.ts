import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { CourseComponent } from './courses/course/course.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'courses/course/:id', component: CourseComponent},
    {path: '**', component: ErrorComponent}
];

