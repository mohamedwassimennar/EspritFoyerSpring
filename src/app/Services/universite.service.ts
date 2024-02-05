
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { universite } from '../Models/universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  apiUrl='http://localhost:8086/projet/universite/';
  list: string[] = [];

  constructor(private _http: HttpClient) { }

  fetchUnis() {
    return this._http.get("http://localhost:8086/projet/universite/retrieve-all-universities");
  }

  fetchUniById(id: number) {
    return this._http.get<universite>("http://localhost:8086/projet/universite/retrieve-university/" + id);
  }

  addUni(uni: universite) {
    return this._http.post<universite>("http://localhost:8086/projet/universite/add-university", uni);
  }

  updateUni(id:number, uni: universite) {
    const url="http://localhost:8086/projet/universite/update-university";
    return this._http.put<universite>(url, uni);
  }
  
  
  /*
  updateUni(uni: universite): Observable<universite> {
    return this._http.put<universite>("http://localhost:8081/foyer/universite/update-university", uni);


     updateUniversite(id: number, updatedUniversite: universite): Observable<universite> {
    const url = ${this.apiUrl}/update-university/${id};
    return this.http.put<universite>(url, updatedUniversite);
  }
  }*/
  

  removeUni(id: number) {
    return this._http.delete<universite>("http://localhost:8086/projet/universite/remove-university/"+ id);
  }

  qrcode(id: number): Observable<Blob> {
    return this._http.get(`http://localhost:8086/projet/universite/${id}/qr-code`, { responseType: 'arraybuffer' })
      .pipe(
        map(data => new Blob([data], { type: 'image/png' }))
      );
  }
/*
  recherche(nomUni: String) {
    return this._http.get<universite>("http://localhost:8081/foyer/universite/rechercheParNom/"+nomUni);

   
  }*/
}