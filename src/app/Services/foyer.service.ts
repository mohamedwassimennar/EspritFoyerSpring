import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { foyer } from '../Models/foyer';


@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  list: string[] = [];
  constructor(private _http: HttpClient) { }

  fetchfoyers() {
    return this._http.get("http://localhost:8086/projet/foyer/retrieve-all-foyer");
  }

  fetchfoyerById(id: number) {
    return this._http.get<foyer>("http://localhost:8086/projet/foyer/retrieve-foyer/" + id);
  }

  addfoyer(uni: foyer) {
    return this._http.post<foyer>("http://localhost:8086/projet/foyer/add-foyer", uni);
  }

  updatefoyer(id:number, uni: foyer) {
    const url="http://localhost:8086/projet/foyer/update-foyer";
    return this._http.put<foyer>(url, uni);
  }
  

  

  removefoyer(id: number) {
    return this._http.delete<foyer>("http://localhost:8086/projet/foyer/remove-foyer/"+ id);
  }
/*
  excel(): Observable<Blob> {
    return this._http.get(http://localhost:8081/foyer/foyer/export/excel, { responseType: 'arraybuffer' })
      .pipe(
        map(data => new Blob([data], { type: 'excel/xlsx' }))
      );
  }*/
  exportFoyersExcel(): Observable<HttpResponse<Blob>> {
    const url = `http://localhost:8086/projet/foyer/export/excel`;

    // Set the response type to 'blob' to handle binary data
    return this._http.get<Blob>(url, { observe: 'response', responseType: 'blob' as 'json' });
  }

}