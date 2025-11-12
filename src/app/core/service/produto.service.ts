import { Injectable }             from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, Observable } from "rxjs";

import { Produto }                from "../model/Produto";
import { BaseService }            from "./base.service";

@Injectable({ providedIn: 'root' })
export class ProdutoService extends BaseService {

  private apiUrl = this.urlBaseApi + '/produtos';

  constructor(http: HttpClient) {
    super(http);
  }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl)
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  listarComFiltro(parametros: HttpParams): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl, { params: parametros })
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.apiUrl + '/' + id)
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  public atualizar(id:number, produto: Produto): Observable<Produto> {
    console.log("PUT");
    return this.http.put<Produto>(this.apiUrl + '/' + id, produto)
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  public atualizarParcial(id:number, produto: Partial<Produto>): Observable<Produto> {
    console.log("PATCH");

    return this.http.patch<Produto>(this.apiUrl + '/' + id, produto)
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  incluir(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto)      
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  excluir(id: number): Observable<String> {
    return this.http.delete<String>(this.apiUrl + '/' + id)
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }
}