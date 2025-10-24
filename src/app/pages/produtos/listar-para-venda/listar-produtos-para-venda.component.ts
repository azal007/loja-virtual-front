import { Component, OnInit } from '@angular/core';

import { Produto }           from '../../../core/model/Produto';
import { ProdutoService }    from '../../../core/service/produto.service';

@Component({
  selector: 'app-listar-produtos-para-venda',
  templateUrl: './listar-produtos-para-venda.component.html',
  standalone: false,
})
export class ListarProdutosParaVendaComponent implements OnInit {
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
}