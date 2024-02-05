import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.prod';
import { Etudiant } from '../Models/Etudiant';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  apiUrl = environment.baseUrl+'etudiant';
 
  constructor(private _http: HttpClient) { };
  
  findAllEtudiants() {
    return this._http.get<Etudiant[]>(this.apiUrl + '/retrieve-all-etudiants');
  }
  
 
 
  fetchEtudiantById(id:number) {
    return this._http.get<Etudiant>(this.apiUrl +'/retrieve-etudiant/'+ id);
  }
 
  updateEtudiant(id: number, etudiant: any): Observable<Etudiant> {
    return this._http.put<Etudiant>(this.apiUrl+'/update-etudiant/'+id, etudiant);
  }
  
 
  addEtudiant(etudiant: any): Observable<any> {
    return this._http.post(this.apiUrl+'/add-etudiant', etudiant);
  }
  removeEtudiant(id: number| undefined) {
    return this._http.delete(this.apiUrl +'/remove-etudiant/'+ id);
  }
  fetchReservationsForEtudiant(etudiantId: number): Observable<any[]> {
    const url = `${this.apiUrl}/${etudiantId}/reservations`; 
    return this._http.get<any[]>(url);
  }
}
