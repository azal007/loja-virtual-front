import { Component, OnInit }  from '@angular/core'
import { UsuarioService }     from '../../../core/service/usuario.service';
import { Usuario }            from '../../../core/model/usuario';
import { HttpParams }         from '@angular/common/http';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios-component.html',
  standalone: false
})
export class ListarUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  paginas: number[] = [];
  filtrarCpf: string | null =     null;
  filtrarNome: string | null =    null;
  filtrarEmail: string | null =   null;
  filtrarAtivo: boolean | null =  null;
  filtrarApelido: string | null = null;
  
  constructor(private usuarioService: UsuarioService) { }
  
  ngOnInit(): void {
    this.listar();
  }
  
  
  listar() {
    this.usuarioService.listar().subscribe((dados: any) => {
      this.usuarios = dados.resultados;
      this.obterPaginas(dados);
    });
  }

  alterar(id: number) {
    window.location.href = `/usuarios/atualizar/${id}`;
  }

  excluir(id: number) {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      this.usuarioService.excluir(id).subscribe((dados: any) => {
        alert('Usuário excluido com sucesso!');
        this.listar();
      });
    }
  }

  abrirTelaIncluirUsuario() {
    window.location.href = '/usuarios/incluir';
  }

  adicionarFiltros(): void {
    const parametros = this.validarFiltros();
    this.usuarioService.listarComFiltro(parametros).subscribe((dados: any) => {
      this.usuarios = dados.resultados;
      this.obterPaginas(dados);
    });
  }
  
  limparFiltros() {
    this.filtrarNome = null;
    this.filtrarApelido = null;
    this.filtrarCpf = null;
    this.filtrarEmail = null;
    this.filtrarAtivo = null;
    this.listar();
  }
  
  validarFiltros(): HttpParams {
    let parametros: HttpParams = new HttpParams();

    if (this.filtrarNome !== null) {
      parametros = parametros.set('nome', this.filtrarNome);
    }
    if (this.filtrarCpf !== null) {
      parametros = parametros.set('cpf', this.filtrarCpf);
    }
    if (this.filtrarEmail !== null) {
      parametros = parametros.set('email', this.filtrarEmail);
    }
    if (this.filtrarAtivo !== null) {
      parametros = parametros.set('ativo', this.filtrarAtivo);
    }
    return parametros;
  }

  obterPaginas(dados: any): void{
    this.paginas = Array.from({ length: dados.infos.totalPaginas }, (_, i) => i + 1);
    console.log(this.paginas);  
  }

  irParaPagina(i: number) {
    this.usuarioService.listarPorPagina(i).subscribe((dados: any) => {
      this.usuarios = dados.resultados;
      this.obterPaginas(dados);
    });
  }
}