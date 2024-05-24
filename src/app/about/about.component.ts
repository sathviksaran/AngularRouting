import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private route: Router, private activatedRoute: ActivatedRoute){

  }

  navigateToHome(){
    this.route.navigate(['home'], {relativeTo: this.activatedRoute});
    // this.route.navigateByUrl('home');
  }
}
