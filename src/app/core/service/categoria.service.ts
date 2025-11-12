import { catchError, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Categoria } from "../model/Categoria";
import { BaseService } from "./base.service";

@Injectable({ providedIn: 'root' })
export class CategoriaService extends BaseService {

  private apiUrl = this.urlBaseApi + '/categorias';

  constructor(http: HttpClient) {
    super(http);
  }

  listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }

  listarComFiltro(parametros: HttpParams): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl, { params: parametros })
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  buscarPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(this.apiUrl + '/' + id)
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  public atualizar(id:number, categoria: Categoria): Observable<Categoria> {
    console.log("PUT");
    return this.http.put<Categoria>(this.apiUrl + '/' + id, categoria)
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  public atualizarParcial(id:number, categoria: Partial<Categoria>): Observable<Categoria> {
    console.log("PATCH");

    return this.http.patch<Categoria>(this.apiUrl + '/' + id, categoria)
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  incluir(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, categoria)      
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }
}