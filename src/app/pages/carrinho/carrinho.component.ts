import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ItemCarrinho } from '../../core/model/ItemCarrinho';
import { ProdutoService } from '../../core/service/produto.service';
import { Produto } from '../../core/model/Produto';

export interface ProdutoCarrinho {
  produto: Produto;
  quantidade: number;
}

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  standalone: false,
})
export class CarrinhoComponent implements OnInit {
  produtosCarrinho: ProdutoCarrinho[] = [];
  valorTotal: number = 0;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.obterProdutosDoCarrinho();
  }

  obterProdutosDoCarrinho() {
    const dadosCarrinho = localStorage.getItem('carrinho');
    if (!dadosCarrinho) {
      return;
    }

    const items: ItemCarrinho[] = JSON.parse(dadosCarrinho);
    const requisicoes = items.map(item => this.produtoService.buscarPorId(item.idProduto));

    forkJoin(requisicoes).subscribe((produtos: Produto[]) => {
      this.produtosCarrinho = produtos.map((produto, index) => ({
        produto,
        quantidade: items[index].qtd
      }));
      this.calcularValorTotal();
    });
  }

  aumentarQuantidade(idProduto: number) {
    this.produtosCarrinho.forEach(item => {
      if (item.produto.id === idProduto) {
        item.quantidade++;
      }
      this.calcularValorTotal();
    });
  }

  diminuirQuantidade(idProduto: number) {
      this.produtosCarrinho.forEach(item => {
        if (item.produto.id === idProduto && item.quantidade > 1) {
          item.quantidade--;
        }
        this.calcularValorTotal();
      });
  }

  removerProduto(idProduto: number) {
    this.produtosCarrinho = this.produtosCarrinho.filter(
      item => item.produto.id !== idProduto
    );
    
    // Atualiza o localStorage
    const dadosCarrinho = localStorage.getItem('carrinho');
    if (!dadosCarrinho) {
      return;
    }
    
    let items: ItemCarrinho[] = JSON.parse(dadosCarrinho);
    items = items.filter(item => item.idProduto !== idProduto);
    localStorage.setItem('carrinho', JSON.stringify(items));
    
    this.calcularValorTotal();
  }

  calcularValorTotal() {
    this.valorTotal = this.produtosCarrinho.reduce(
      (total, item) => total + (item.produto.preco * item.quantidade), 0
    );
    this.valorTotal = parseFloat(this.valorTotal.toFixed(2));
  }
}
