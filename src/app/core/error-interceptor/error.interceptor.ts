import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let mensagem = 'Ocorreu um erro inesperado.';

        if (error.error instanceof ErrorEvent) {
          // Erro do lado do cliente
          mensagem = `Erro do cliente: ${error.error.message}`;
        } else {
          // Erro do lado do servidor
          mensagem = `Erro ${error.status}: ${error.message}`;
        }

        console.error('[Interceptor] ' + mensagem);
        return throwError(() => new Error(mensagem));
      })
    );
  }
}