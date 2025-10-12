import { Component } from "@angular/core";
import { Produto } from "./Produto";
import { ProdutosService } from "./produtos.service";

@Component({ selector: 'app-create-product', templateUrl: './incluir-produto.component.html' })
export class IncluirProdutoComponent {
  produto: Produto = { nome: '', preco: 0 };

  constructor(private productService: ProdutosService) {}

  salvar() {
    this.productService.create(this.produto).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
    });
  }
}