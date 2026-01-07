import { Component, OnInit } from '@angular/core';

import { Produto }           from '../../../core/model/Produto';
import { ProdutoService }    from '../../../core/service/produto.service';
import { ItemCarrinho } from '../../../core/model/ItemCarrinho';

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
      this.produtos = dados.resultados;
    });
  }

  adicionarNoCarrinho(idProduto: number) {
    let carrinho = this.obterCarrinho();

    for (let item of carrinho) {
      if (item.idProduto === idProduto) {
        // Produto já existe no carrinho, incrementa a quantidade e encerra
        item.qtd++;
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        alert('Adicionado!')
        return;
      }
    }

    // Produto não existe no carrinho, adiciona novo item
    carrinho.push({ idProduto: idProduto, qtd: 1 });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert('Adicionado!')
  }

  private obterCarrinho(): ItemCarrinho[] {
    const dadosCarrinho = localStorage.getItem('carrinho');
    if (dadosCarrinho) {
      // Retorna carrinho já existente
      return JSON.parse(dadosCarrinho);
    }
    // Retorna carrinho vazio
    return [];
  }
}