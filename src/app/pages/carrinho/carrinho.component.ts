import { Component, OnInit } from '@angular/core';
import { ItemCarrinho } from '../../core/model/ItemCarrinho';
import { ProdutoService } from '../../core/service/produto.service';
import { Produto } from '../../core/model/Produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  standalone: false,
})
export class CarrinhoComponent implements OnInit {
  produtos: Produto[] = [];
  items: ItemCarrinho[] = [];
  valorTotal: number = 0;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.obterProdutosDoCarrinho();
    this.atualizarResumo();
  }

  obterProdutosDoCarrinho() {
    const dadosCarrinho = localStorage.getItem('carrinho');
    if (dadosCarrinho) {
      this.items = JSON.parse(dadosCarrinho);
    }
    const produtosCarregados: Produto[] = [];

    for (const item of this.items) {
      this.produtoService.buscarPorId(item.idProduto).subscribe((produto: Produto) => {
        produtosCarregados.push(produto);
        if (produtosCarregados.length === this.items.length) {
          this.produtos = produtosCarregados;
        }
      });
    }
  }

  // TODO: Implementar os métodos abaixo
  removerDoCarrinho(id: number) {
    throw new Error('Method not implemented.');
  }

  atualizarResumo() {
    throw new Error('Method not implemented.');
  }

  finalizarCompra() {
    throw new Error('Method not implemented.');
  }
}
