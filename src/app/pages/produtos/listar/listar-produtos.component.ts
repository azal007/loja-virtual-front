import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../core/model/Produto';
import { ProdutoService } from '../../../core/service/produto.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  standalone: false,
})
export class ListarProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

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
}