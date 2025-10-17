import { Component } from "@angular/core";
import { Produto } from "../../../core/model/Produto";
import { ProdutoService } from "../../../core/service/produto.service";

@Component({ 
  selector: 'app-create-product', 
  templateUrl: './incluir-produto.component.html',
  standalone: false,
 })
export class IncluirProdutoComponent {
  produto: Produto = { nome: '', urlImagem: '', preco: 0 };

  constructor(private productService: ProdutoService) {}

  salvar() {
    this.productService.create(this.produto).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
    });
  }
}