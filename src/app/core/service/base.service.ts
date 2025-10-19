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
  protected handleError(error: any) {
    let errorMessage = '';

    if (error.error == null || error.error.mensagem == null) {
      // Server status code message
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      alert('Erro ao chamar a API: ' + errorMessage);
    } else if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
      alert('Erro: ' + errorMessage);
    } else {
      // Server custom message
      errorMessage = error.error.mensagem;
      alert('Erro: ' + errorMessage);

      console.error(`Error Code: ${error.status}\nMessage: ${error.message}`);
    }
    return throwError(errorMessage);
  }
}
