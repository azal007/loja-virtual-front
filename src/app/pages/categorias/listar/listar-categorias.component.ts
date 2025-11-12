import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../core/model/Categoria';
import { CategoriaService } from '../../../core/service/categoria.service';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-listar-categorias',
    templateUrl: './listar-categorias.component.html',
    standalone: false,
})
export class ListarCategoriasComponent implements OnInit {
    categorias: Categoria[] = [];

    filtroAtivo: string | null = null;

    constructor(private categoriaService: CategoriaService) { }

    ngOnInit(): void {
        this.listar();
    }

    listar() {
        this.categoriaService.listar().subscribe((dados: any) => {
            this.categorias = dados;
        });
    }

    alterar(id: number) {
        window.location.href = `/categorias/atualizar/${id}`;
    }

    excluir(id: number) {
        window.location.href = `/categorias/excluir/${id}`;
    }

    abrirTelaIncluirCategoria() {
        window.location.href = '/categorias/incluir';
    }
    adicionarFiltros(): void {
        // Chama o serviço para listar produtos com os filtros aplicados
        // O subscribe aguarda a resposta assíncrona e após receber os dados, atualiza a lista de produtos
        const params = this.validadarFiltros();
        this.categoriaService.listarComFiltro(params).subscribe((categorias) => {
            this.categorias = categorias;
        });
    }

    limparFiltros() {
        this.filtroAtivo = null;
        this.listar();
    }

    validadarFiltros(): HttpParams {
        let params = new HttpParams();

        if (this.filtroAtivo !== null) {
            params = params.set('ativo', this.filtroAtivo);
        }

        return params;
    }
}