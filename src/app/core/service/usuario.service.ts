import { Injectable }             from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

import { Usuario }                from '../model/usuario';
import { BaseService }            from './base.service';

@Injectable({providedIn: 'root'})
export class UsuarioService extends BaseService{
  private apiUrl: string = this.urlBaseApi + '/usuarios';

  public constructor(http: HttpClient) {
    super(http);
  }

  // public buscarPorId(id: number): Observable<Usuario> {
  //   return this.http.get<Usuario>(this.apiUrl + '/' + id)
  //     .pipe(
  //       catchError(error => {return this.handleError(error)})
  //     );
  // }

  // public atualizar(id:number, usuario: Usuario): Observable<Usuario> {
  //   return this.http.put<Usuario>(this.apiUrl + '/' + id, usuario)
  //     .pipe(
  //       catchError(error => {return this.handleError(error)})
  //     );
  // }

  public listar(): Observable<Usuario[]> {    
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  public listarComFiltros(parametros: any): Observable<Usuario[]> {    
    return this.http.get<Usuario[]>(this.apiUrl, { params: parametros });
  }

  public incluir(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario)
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }

  public excluir(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id)
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }
}
