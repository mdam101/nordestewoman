import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuariodto } from '../models/usuario/usuariodto';
import { Usuarioadmindto } from '../models/usuario/usuarioadmindto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL1 = "https://nordestewoman.herokuapp.com/auth/login";
  private baseURL2 = "https://nordestewoman.herokuapp.com/usuario";

  constructor(private http: HttpClient) { }

  login(usuario: Usuariodto): Observable<Usuariodto> {
    return this.http.post<Usuariodto>(`${this.baseURL1}`, usuario, httpOptions);
  }

  register(usuario: Usuariodto): Observable<Usuariodto> {
    const params = {email: usuario.email, password: usuario.password}
    return this.http.post<Usuariodto>(`${this.baseURL2}`, params, httpOptions);
  }

  registerrole(usuario: Usuarioadmindto): Observable<Usuarioadmindto> {
    const params = {email: usuario.email, password: usuario.password, rol: usuario.rol}
    return this.http.post<Usuarioadmindto>(`${this.baseURL2}`, params, httpOptions);
  }
}
