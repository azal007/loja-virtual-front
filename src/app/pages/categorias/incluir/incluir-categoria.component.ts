import { Component } from '@angular/core';
import { Categoria } from '../../../core/model/Categoria';
import { CategoriaService } from '../../../core/service/categoria.service';

@Component({
    selector: 'app-incluir-categorias',
    templateUrl: './incluir-categoria.component.html',
    standalone: false,
})
export class IncluirCategoriasComponent {
    categoria: Categoria = { id: 0, nome: '', idCategoriaPai: null };

    constructor(private categoriaService: CategoriaService) { }

    salvar() {
        this.categoriaService.incluir(this.categoria).subscribe(() => {
            alert('Categoria cadastrada com sucesso!');
            this.irParaPaginaListarCategorias();
        });
    }

    irParaPaginaListarCategorias() {
        window.location.href = '/categorias/listar';
    }
}