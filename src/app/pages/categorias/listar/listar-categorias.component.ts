import { Component } from '@angular/core';
import { Categoria } from '../../../core/model/Categoria';

@Component({
    selector: 'app-listar-categorias',
    templateUrl: './listar-categorias.component.html',
    standalone: false,
})
export class ListarCategoriasComponent {
    categorias: Categoria[] = [];
    
    alterar(arg0: number) {
        throw new Error('Method not implemented.');
    }

    excluir(arg0: number) {
        throw new Error('Method not implemented.');
    }
    
    abrirTelaIncluirCategoria() {
        window.location.href = '/categorias/incluir';
    }
}