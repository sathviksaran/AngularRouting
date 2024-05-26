import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class CourseGuardService implements CanActivate {

    constructor(private authService: AuthService, private router: Router){
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(this.authService.IsAuthenticated());
        if(this.authService.IsAuthenticated()){
            return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }
}   

// import { inject } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivateFn, mapToCanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { AuthService } from './auth.service';

// export const courseGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
//   const authService = inject(AuthService);
//   const router = inject(Router);

//   if (authService.IsAuthenticated()) {
//     console.log(authService.IsAuthenticated());
//     return true;
//   } else {
//     router.navigate(['']);
//     return false;
//   }
// };