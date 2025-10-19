import { catchError, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../model/Produto";
import { BaseService } from "./base.service";

@Injectable({ providedIn: 'root' })
export class ProdutoService extends BaseService {

  private apiUrl = this.urlBaseApi + '/produtos';

  constructor(http: HttpClient) {
    super(http);
  }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
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