import { Injectable }             from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable } from "rxjs";

import { BaseService }            from "./base.service";
import { ItemCarrinho } from "../model/ItemCarrinho";

@Injectable({ providedIn: 'root' })
export class PedidoService extends BaseService {
  private apiUrl = this.urlBaseApi + '/pedidos';

  constructor(http: HttpClient) {
    super(http);
  }

  incluir(item: ItemCarrinho[]): Observable<ItemCarrinho[]> {
    return this.http.post<ItemCarrinho[]>(this.apiUrl, item)      
      .pipe(
        catchError(error => {return this.handleError(error)})
      );
  }
}