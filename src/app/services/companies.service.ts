import { Injectable } from '@angular/core';
import { Companies } from '../models/companies'; 
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
 
  url = 'http://localhost:4000/api/empresas/';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarCompanies(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarCompanies(producto: Companies): Observable<any> {
    return this.http.post(this.url, producto);
  }

  obtenerCompanies(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}