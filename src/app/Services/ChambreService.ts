import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ChambreModel } from '../Models/Chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  updateChambre(idChambre: any, updatedData: any): Observable<any> {
    return this.http.put<any>("http://localhost:8086/projet/chambre/update-Chambre/" + idChambre, updatedData);
  }
  
  getChambreList():Observable<ChambreModel[]>
  {
    return this.http.get<ChambreModel[]>("http://localhost:8086/projet/chambre/retrieve-all-chambre");
  }
  retrieveChambre(idChambre: any): Observable<any> {
    return this.http.get<any>(`http://localhost:8086/projet/chambre/retrieve-Chambre/${idChambre}`);
  }
  
  
AddChambre(data : any)
{
  return this.http.post<any>("http://localhost:8086/projet/chambre/add-Chambre",data);

}
DeleteChambre(idChambre: any): Observable<any> {
    return this.http.delete<any>(`http://localhost:8086/projet/chambre/remove-Chambre/${idChambre}`);
  }
  
  

  UpdateChambreById(idChambre: any, updatedData: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8086/projet/chambre/update-chambre/${idChambre}`, updatedData);
  }
  
  qrcode(idChambre: number): Observable<Blob> {
    return this.http.get(`http://localhost:8086/projet/chambre/generate-qr/${idChambre}`, { responseType: 'arraybuffer' })
      .pipe(
        map(data => new Blob([data], { type: 'image/png' }))
      );
  }
  
}