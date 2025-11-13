import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../core/model/usuario';
import { UsuarioService } from '../../../core/service/usuario.service';

@Component({
  selector: 'app-atualizar-usuarios-component',
  templateUrl: './atualizar-usuarios-component.html',
  standalone: false
})
export class AtualizarUsuariosComponent implements OnInit {
  usuario: Usuario = {
    id: 0,
    nome: '',
    apelido: '',
    cpf: '',
    dataNascimento: new Date(),
    email: '',
    senha: '',
    habilitarNotificacoesPromocoes: false,
    ativo: false
  };

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioService.buscarPorId(+id).subscribe((data) => {
        this.usuario = data;
        console.log(this.usuario);
      });
    }
  }

  salvar() {
    let parcial: Boolean = false;

    for (const key in this.usuario) {
      if (this.usuario[key as keyof Usuario] === null || this.usuario[key as keyof Usuario] === '') {
        parcial = true;
      }
    }

    if (parcial) {
      this.atualizarParcial();
    } else {
      this.atualizar();
    }
  }

  atualizar() {
    this.usuarioService.atualizar(this.usuario.id, this.usuario).subscribe(() => {
      alert('Usuário atualizado com sucesso');
      this.irParaPaginaListarUsuarios();
    });
  }

  atualizarParcial() {
    this.usuarioService.atualizarParcial(this.usuario.id, this.usuario).subscribe(() => {
      alert('Usuário atualizado com sucesso');
      this.irParaPaginaListarUsuarios();
    });
  }

  irParaPaginaListarUsuarios() {
    window.location.href = '/usuarios/listar';
  }
}
