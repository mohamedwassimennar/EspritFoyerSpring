// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8086/projet/user/login';
  private tokenKey = 'auth_token'; // Key for storing token in localStorage
  private token: string | null = null;

  constructor(private http: HttpClient) {
    // Retrieve token from localStorage during service initialization
    this.token = localStorage.getItem(this.tokenKey);
  }

  loginUser(email: string, password: string): Observable<any> {
    const user = { email, motdepasse: password };
    return this.http.post(this.apiUrl, user);
  }

  setToken(token: string | null) {
    this.token = token;

    // Store the token in localStorage
    if (token) {
      localStorage.setItem(this.tokenKey, token);
    } else {
      // Remove the token from localStorage if it's null (logout)
      localStorage.removeItem(this.tokenKey);
    }
  }

  getToken(): string | null {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
