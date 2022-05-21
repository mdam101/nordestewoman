import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private baseURL1 = "https://nordestewoman.herokuapp.com/pedidos";
  private baseURL2 = "https://nordestewoman.herokuapp.com/pedido";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getPedidos(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(`${this.baseURL1}`);
  }

  getIdPedido(id: String): Observable<Pedido> {
    return this.httpClient.get<Pedido>(`${this.baseURL2}/${id}`);
  }

  addPedido(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(`${this.baseURL2}/add`, pedido);
  }

  deletePedido(id: String) {
    return this.httpClient.delete(`${this.baseURL2}/delete/${id}`);
  }
}
