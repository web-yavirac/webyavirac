import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companie } from '../../models/companie';

@Injectable({
  providedIn: 'root'
})
export class CompanieService {
  url = 'http://localhost:3000/empresas/';

  constructor(private http: HttpClient) { }

  getCompanie(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarCompanie(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarCompanie(companie: Companie): Observable<any> {
    return this.http.post(this.url, companie);
  }

  obtenerCompanie(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}