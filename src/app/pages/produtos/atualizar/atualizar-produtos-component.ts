import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../../core/model/Produto';
import { ProdutoService } from '../../../core/service/produto.service';

@Component({
  selector: 'app-atualizar-produtos-component',
  templateUrl: './atualizar-produtos-component.html',
  standalone: false
})
export class AtualizarProdutosComponent implements OnInit {
  produto: Produto = {id: 0, nome: '', categoriaId: 0, urlImagem: '', preco: 0,  descricao: ''};

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.buscarPorId(+id).subscribe((data) => {
        this.produto = data;
        console.log(this.produto);
      });
    }
  }

  salvar() {
    let parcial: Boolean = false;

    for (const key in this.produto) {
      if (this.produto[key as keyof Produto] === null || this.produto[key as keyof Produto] === '') {
        parcial = true;
      }
    }

    if (parcial) {
      this.atualizarParcial();
    } else {
      this.atualizar();
    }
  }

  atualizar() {
    this.produtoService.atualizar(this.produto.id, this.produto).subscribe(() => {
      alert('Produto atualizado com sucesso');
      this.irParaPaginaListarProdutos();
    });
  }

  atualizarParcial() {
    this.produtoService.atualizarParcial(this.produto.id, this.produto).subscribe(() => {
      alert('Produto atualizado com sucesso');
      this.irParaPaginaListarProdutos();
    });
  }

  irParaPaginaListarProdutos() {
    window.location.href = '/produtos/listar';
  }
}
