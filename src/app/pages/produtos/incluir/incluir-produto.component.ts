import { Component } from "@angular/core";
import { Produto } from "../../../core/model/Produto";
import { ProdutoService } from "../../../core/service/produto.service";
import { CategoriaService } from "../../../core/service/categoria.service";

@Component({ 
  selector: 'app-create-product', 
  templateUrl: './incluir-produto.component.html',
  standalone: false,
 })
export class IncluirProdutoComponent {
  produto: Produto = { id: 0, nome: '', categoriaId: 0, urlImagem: '', preco: 0 };
  categorias: any[] = [];

  constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  salvar() {
    this.produtoService.incluir(this.produto).subscribe(() => {
      alert('Produto cadastrado com sucesso!');
      this.irParaPaginaListarProdutos();
    });
  }

  carregarCategorias() {
    this.categoriaService.listar().subscribe((dados: any) => {
      this.categorias = dados;
    });
  }

  irParaPaginaListarProdutos() {
    window.location.href = '/produtos/listar';
  }
}