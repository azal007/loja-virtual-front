import { Component } from '@angular/core';
import { Usuario }   from '../../../core/model/usuario';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir-usuarios-component.html',
  standalone: false,
})
export class IncluirUsuariosComponent {
  usuario: Usuario = {
    id: 0,
    nome: '',
    apelido: '',
    cpf: '',
    email: '',
    senha: '',
    dataNascimento: new Date("0000-00-00"),
    habilitarNotificacoesPromocoes: false,
    ativo: true
  }
}
