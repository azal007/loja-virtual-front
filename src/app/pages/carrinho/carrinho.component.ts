import { forkJoin } from 'rxjs';
import { Produto } from '../../core/model/Produto';
import { ItemCarrinho } from '../../core/model/ItemCarrinho';
import { ProdutoService } from '../../core/service/produto.service';
import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../core/service/pedido.service';
import { ProdutoCarrinho } from '../../core/model/ProdutoCarrinho';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  standalone: false,
})
export class CarrinhoComponent implements OnInit {
  produtosCarrinho: ProdutoCarrinho[] = [];
  valorTotal: number = 0;

  constructor(private produtoService: ProdutoService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.obterProdutosDoCarrinho();
  }

  obterCarrinho(): ItemCarrinho[] {
    const dadosCarrinho = localStorage.getItem('carrinho');
    if (dadosCarrinho) {
      const items: ItemCarrinho[] = JSON.parse(dadosCarrinho);
      return items;
    }
    return [];
  }

  obterProdutosDoCarrinho() {
    const items = this.obterCarrinho();

    const requisicoes = items.map(item => this.produtoService.buscarPorId(item.produtoId));

    forkJoin(requisicoes).subscribe((produtos: Produto[]) => {
      this.produtosCarrinho = produtos.map((produto, index) => ({
        produto,
        quantidade: items[index].quantidade
      }));
      this.calcularValorTotal();
    });
  }

  aumentarQuantidade(produtoId: number) {
    this.produtosCarrinho.forEach(item => {
      if (item.produto.id === produtoId) {
        item.quantidade++;
      }
      this.calcularValorTotal();
    });
  }

  diminuirQuantidade(produtoId: number) {
      this.produtosCarrinho.forEach(item => {
        if (item.produto.id === produtoId && item.quantidade > 1) {
          item.quantidade--;
        }
        this.calcularValorTotal();
      });
  }

  removerProduto(produtoId: number) {
    const dadosCarrinho = localStorage.getItem('carrinho');
    if (!dadosCarrinho) return;
    
    let items: ItemCarrinho[] = JSON.parse(dadosCarrinho);
    items = items.filter(item => item.produtoId !== produtoId);
    localStorage.setItem('carrinho', JSON.stringify(items));
    
    this.produtosCarrinho = this.produtosCarrinho.filter(item => item.produto.id !== produtoId);
    this.calcularValorTotal();
  }

  calcularValorTotal() {
    this.valorTotal = this.produtosCarrinho.reduce(
(total, item) => total + (item.produto.preco * item.quantidade), 0
    );
    this.valorTotal = parseFloat(this.valorTotal.toFixed(2));
  }

  telaInical() {
    window.location.assign("/");
  }

  finalizarCompra() {
    if (this.produtosCarrinho.length === 0) {
      alert('O carrinho está vazio!');
      return;
    }

    let items: ItemCarrinho[] = this.obterCarrinho();

    console.log(items);

    this.pedidoService.incluir(items).subscribe(() => {
      alert('Pedido finalizado com sucesso!');
      localStorage.removeItem('carrinho');
      this.produtosCarrinho = [];
      this.valorTotal = 0;
    });
  }
}
