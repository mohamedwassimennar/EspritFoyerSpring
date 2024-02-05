import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  constructor(private router: Router) {}

  shouldShowNavbar(): boolean {
    // Check if the current route is not '/login'
    return this.router.url !== '/login';
  }

  shouldShowFooter(): boolean {
    // Check if the current route is not '/login'
    return this.router.url !== '/login';
  }
}
