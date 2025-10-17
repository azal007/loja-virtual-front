import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../core/model/Produto';
import { ProdutoService } from '../../../core/service/produto.service';

@Component({
  selector: 'app-listar-produtos-para-venda',
  templateUrl: './listar-produtos-para-venda.component.html',
  standalone: false,
})
export class ListarProdutosParaVendaComponent implements OnInit {
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
}