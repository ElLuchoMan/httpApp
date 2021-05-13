import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpApp';
  constructor(private router: Router) { }
  usuarios() {
    this.router.navigate(['usuarios']);
  }
  posts() {
    this.router.navigate(['posts']);
  }
}
