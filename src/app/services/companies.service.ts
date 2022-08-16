import { Injectable } from '@angular/core';
import { Companies } from '../models/companies'; 
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
 
  url = 'http://localhost:3000/api/empresas/';

  constructor(private servicio: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.servicio.get(this.url);
  }

  eliminarCompanies(id: string): Observable<any> {
    return this.servicio.delete(this.url + id);
  }

  guardarCompanies(producto: Companies): Observable<any> {
    return this.servicio.post(this.url, producto);
  }

  obtenerCompanies(id: string): Observable<any> {
    return this.servicio.get(this.url + id);
  }

	actualizarCompanies(id: string): Observable<any> {
    return this.servicio.get(this.url + id);
  }
}