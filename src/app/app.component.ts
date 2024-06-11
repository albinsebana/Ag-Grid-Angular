import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  nextPage() {
    this.router.navigate(['/AxWebOrigination']);
  }

  nextPage1(){
    this.router.navigate(['/third']);
  }

  nextPage2(){
    this.router.navigate(['/AxWebOrigination/second-page']);
  }
}
