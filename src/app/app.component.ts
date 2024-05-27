import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationStart, Router, RouterEvent, RouterLinkActive, RouterOutlet, RouterStateSnapshot, Event, NavigationCancel, NavigationError } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoursesComponent } from "./courses/courses.component";
import { RouterLink } from '@angular/router';
import { AuthService } from './auth.service';
import { CourseGuardService } from './course-guard.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent, CoursesComponent, RouterLink, RouterLinkActive, NgIf],
    providers: [CourseGuardService]
})
export class AppComponent implements OnInit {
  title = 'AngularRouting';
  displayLoadingIndicator: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
      this.activatedRoute.fragment.subscribe((value) => {
        console.log(value);
        this.jumpTo(value);
      });

      this.router.events.subscribe((routerEvent: Event) => {
        if(routerEvent instanceof NavigationStart){
          this.displayLoadingIndicator = true;
        }

        if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
          this.displayLoadingIndicator = false;
        }
      })
  }

  jumpTo(section: any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }

  login(){
    this.authService.login();
    console.log(this.authService.IsAuthenticated());
  }

  logout(){
    this.authService.logout();
    console.log(this.authService.IsAuthenticated());
  }
  
}
