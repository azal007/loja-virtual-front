import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

export abstract class BaseService {
  protected urlBaseApi = 'http://localhost:8080';

  constructor(protected http: HttpClient) {}

/*   // Http Options
  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic dGpyajpzM2NyM3Q='
    })
  }
 */
  protected handleError(e: any) {
    console.error(`Error Code: ${e?.status}\nMessage: ${e?.message}`);
    let errorMessage = '';

    // Server status code message
    if (e.error == null || e.error.mensagem == null) {
      errorMessage = `Error Code: ${e.status}\nMessage: ${e.message}`;
      alert('Erro ao chamar a API: ' + errorMessage);

    // Client-side error
    } else if (e.error instanceof ErrorEvent) {
      errorMessage = e.error.message;
      alert('Erro: ' + errorMessage);

    } else {
      // Server custom message
      errorMessage = e.error.mensagem;

      // Lista de erros de validação
      if (e.error.errosValidacao != null && e.error.errosValidacao.length > 0) {
        e.error.errosValidacao.forEach((err: string) => {
          errorMessage += '\n - ' + err;
        });
      }
      alert('Erro: ' + errorMessage);
    }
    return throwError(errorMessage);
  }
}
