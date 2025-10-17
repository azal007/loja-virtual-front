import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../model/Produto";

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private apiUrl = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  create(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }
}