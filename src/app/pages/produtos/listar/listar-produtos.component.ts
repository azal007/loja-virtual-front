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
//  carregando = true;
  erro = '';

  constructor(private produtoService: ProdutoService) {
    console.log('ListarProdutosComponent criado');
  }

  ngOnInit(): void {
    console.log('ListarProdutosComponent ngOnInit');
    this.produtoService.getAll().subscribe({
      next: (dados: any) => {
        this.produtos = dados;
        console.log(dados);
        console.log(this.produtos);
//        this.carregando = false;
      },
      error: (err: any) => {
        this.erro = 'Erro ao carregar produtos.';
//        this.carregando = false;
      }
    });
  }

  abrirTelaIncluirProduto() {
    window.location.href = '/produtos/incluir';    
  }
}