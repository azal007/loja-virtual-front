import { Component } from '@angular/core';
import { Usuario } from '../../../core/model/usuario';
import { UsuarioService } from '../../../core/service/usuario.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir-usuarios-component.html',
  standalone: false,
})
export class IncluirUsuariosComponent {
  usuario: Usuario = {
    id: 0,
    nome: '',
    cpf: '',
    dataNascimento: new Date(),
    email: '',
    senha: '',
    habilitarNotificacoesPromocoes: false,
    ativo: false
  };

  constructor(private usuarioService: UsuarioService) { }

  salvar() {
    this.usuarioService.incluir(this.usuario).subscribe(() => {
      alert('Usuário cadastrado com sucesso!');
      this.irParaPaginaListarUsuarios();
    });
  }

  irParaPaginaListarUsuarios() {
    window.location.href = '/usuarios/listar';
  }
}
