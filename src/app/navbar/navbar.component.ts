import { Component } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    // Set the token to null, effectively logging the user out
    this.authService.setToken(null);

    // Redirect to the login page (or any other desired page)
    this.router.navigate(['/login']);
  }

}
