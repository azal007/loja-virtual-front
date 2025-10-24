import { Component, OnInit }    from '@angular/core';
import { Produto }              from '../../../core/model/Produto';
import { ProdutoService }       from '../../../core/service/produto.service';
import { HttpParams }           from '@angular/common/http';

// TODO: Modificar a URL após a adicionar os filtros
// Exemplo: /produtos?nome=ssd&categoria=3&precoMin=200&precoMax=440&ativo=true
@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  standalone: false,
})
export class ListarProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  filtroNome:      string | null = null;
  filtroCategoria: string | null = null;
  filtroPrecoMin:  string | null = null;
  filtroPrecoMax:  string | null = null;
  filtroAtivo:     string | null = null;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.produtoService.listar().subscribe((dados: any) => {
      this.produtos = dados;
    });
  }

  alterar(id: number) {
    alert('Funcionalidade de alterar produto ainda não implementada.');
  }

  excluir(id: number) {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      this.produtoService.excluir(id).subscribe((dados: any) => {
        alert('Produto excluído com sucesso!');
      });
    }
  }

  abrirTelaIncluirProduto() {
    window.location.href = '/produtos/incluir';
  }

  adicionarFiltros(): void {
    // Chama o serviço para listar produtos com os filtros aplicados
    // O subscribe aguarda a resposta assíncrona e após receber os dados, atualiza a lista de produtos
    const params = this.validadarFiltros();
    this.produtoService.listarComFiltro(params).subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  limparFiltros() {
    this.filtroNome =       null;
    this.filtroCategoria =  null;
    this.filtroPrecoMin =   null;
    this.filtroPrecoMax =   null;
    this.filtroAtivo =      null;
    this.listar();
  }

  validadarFiltros(): HttpParams {
    let params = new HttpParams();
    
    //  A chave do parâmetro deve corresponder ao nome esperado pela API do backend
    if (this.filtroNome !== null) {
      params = params.set('nome', this.filtroNome);
    }

    if (this.filtroCategoria !== null) {
      params = params.set('id', this.filtroCategoria);
    }

    if (this.filtroPrecoMin !== null) {
      params = params.set('min', this.filtroPrecoMin);
    }

    if (this.filtroPrecoMax !== null) {
      params = params.set('max', this.filtroPrecoMax);
    }

    if (this.filtroAtivo !== null) {
      params = params.set('ativo', this.filtroAtivo);
    }

    return params;
  }
}