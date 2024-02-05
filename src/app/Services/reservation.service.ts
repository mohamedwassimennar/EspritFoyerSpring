// reservation.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = environment.baseUrl+'reservation'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  updateReservationStatus(reservationId: number): Observable<string> {
   
    const updateStatusUrl = `${this.apiUrl}/${reservationId}/update-status`;

   
    return this.http.put<string>(updateStatusUrl, null); 
  }
}

