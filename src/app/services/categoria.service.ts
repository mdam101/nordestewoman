import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseURL1 = "https://nordestewoman.herokuapp.com/categorias";
  private baseURL2 = "https://nordestewoman.herokuapp.com/categoria";

  constructor(private httpClient: HttpClient) { }

  getCategorias(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.baseURL1}`);
  }

  getIdCategoria(id: String): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${this.baseURL2}/${id}`);
  }

  addCategoria(categoria: Categoria): Observable<Categoria> {
    return this.httpClient.post<Categoria>(`${this.baseURL2}/add`, categoria);
  }

  deleteCategoria(id: String) {
    return this.httpClient.delete(`${this.baseURL2}/delete/${id}`);
  }
}
