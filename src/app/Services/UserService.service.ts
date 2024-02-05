// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { User } from '../Models/User.Model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private apiUrl = 'http://localhost:8086/projet/user/add-user';
  private baseUrl = 'http://localhost:8086/projet/user';

  constructor(private http: HttpClient) {}

  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
  retrieveAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/retrieve-all-users`);
  }
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${userId}`);
  }

  getUserRoleStatistics(): Observable<{ [key: string]: number }> {
    const url = `${this.baseUrl}/role-statistics`;
    return this.http.get<{ [key: string]: number }>(url);
  }
  getUserById(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/retrieve-user/${userId}`);
  }

  updateUser(userId: string, user: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update-user/${userId}`, user);
  }
  getQRCode(userId: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${userId}/qr-code`, { responseType: 'blob' });
  }
  generatePDF(userId: number): Observable<Blob> {
    const url = `${this.baseUrl}/${userId}/generate-pdf`;
    return this.http.get(url, { responseType: 'blob' });
  }
}
