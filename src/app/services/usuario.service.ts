import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "https://nordestewoman.herokuapp.com/usuarios";

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}`);
  }
}
