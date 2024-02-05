// login.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../Services/Auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.loginUser(email, password).subscribe(
        (response) => {
          // Stockez le token dans le service AuthService ou utilisez NgRx Store
          this.authService.setToken(response.token);
          this.errorMessage = null;

          // Redirigez vers la page "home" après la connexion réussie
          this.router.navigate(['/home']);
        },
        (error) => {
          this.errorMessage = 'Adresse e-mail ou mot de passe incorrect.';
        }
      );
    }
  }
}
