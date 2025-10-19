import { catchError, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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

  incluir(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, categoria)      
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }
}