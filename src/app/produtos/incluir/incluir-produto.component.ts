import { Component } from "@angular/core";
import { ProdutosService } from "../produtos.service";
import { Produto } from "../Produto";

@Component({ 
  selector: 'app-create-product', 
  templateUrl: './incluir-produto.component.html',
  standalone: false,
 })
export class IncluirProdutoComponent {
  produto: Produto = { nome: '', preco: 0 };

  constructor(private productService: ProdutosService) {}

  salvar() {
    this.productService.create(this.produto).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
    });
  }
}