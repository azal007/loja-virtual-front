import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../../core/service/categoria.service';
import { Categoria } from '../../../core/model/Categoria';

@Component({
  selector: 'app-atualizar-categorias-component',
  templateUrl: './atualizar-categorias-component.html',
  standalone: false
})
// TODO: Corrigir o método de atualização das categorias. Não consigo atualizar o nome das categorias que não possuem categoria pai.
export class AtualizarCategoriasComponent implements OnInit {
  categoria: Categoria = { id: 0, nome: '', idCategoriaPai: null };

  constructor(private route: ActivatedRoute, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.categoriaService.buscarPorId(+id).subscribe((data) => {
        this.categoria = data;
        console.log(this.categoria);
      });
    }
  }

  salvar() {
    let parcial: Boolean = false;

    for (const key in this.categoria) {
      if (this.categoria[key as keyof Categoria] === null || this.categoria[key as keyof Categoria] === '') {
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
    this.categoriaService.atualizar(this.categoria.id, this.categoria).subscribe(() => {
      alert('Produto atualizado com sucesso');
      this.irParaPaginaListarProdutos();
    });
  }

  atualizarParcial() {
    this.categoriaService.atualizarParcial(this.categoria.id, this.categoria).subscribe(() => {
      alert('Produto atualizado com sucesso');
      this.irParaPaginaListarProdutos();
    });
  }

  irParaPaginaListarProdutos() {
    window.location.href = '/produtos/listar';
  }
}
