import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ropa } from '../models/ropa/ropa';
import { Ropadto } from '../models/ropa/ropadto';

@Injectable({
  providedIn: 'root'
})
export class RopaService {

  private baseURL1 = "https://nordestewoman.herokuapp.com/ropas";
  private baseURL2 = "https://nordestewoman.herokuapp.com/ropa";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getRopas(): Observable<Ropa[]> {
    return this.httpClient.get<Ropa[]>(`${this.baseURL1}`);
  }

  getIdRopa(id: String): Observable<Ropa> {
    return this.httpClient.get<Ropa>(`${this.baseURL1}/${id}`);
  }

  getImagen(id: String): Observable<any> {
    return this.httpClient.get(`${this.baseURL1}/imagen/${id}`);
  }

  getRopaByNombreCategoria(nombreCategoria: String): Observable<Ropa[]> {
    return this.httpClient.get<Ropa[]>(`${this.baseURL1}/categoria/${nombreCategoria}`);
  }

  addRopa(ropa: FormData): Observable<Ropadto> {
    return this.httpClient.post<Ropadto>(`${this.baseURL2}/add`, ropa);
  }

  editRopa(id: String, ropa: Ropa): Observable<any> {
    return this.httpClient.put(`${this.baseURL2}/edit/${id}`, ropa);
  }

  editImagenRopa(id: String, ropa: File): Observable<any> {
    return this.httpClient.put(`${this.baseURL2}/editImage/${id}`, ropa);
  }

  deleteRopa(id: String) {
    return this.httpClient.delete(`${this.baseURL2}/delete/${id}`);
  }
}
