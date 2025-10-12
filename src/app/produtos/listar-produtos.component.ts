import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { Produto } from './Produto';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss']
})
export class ListarProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  carregando = true;
  erro = '';

  constructor(private produtoService: ProdutosService) {}

  ngOnInit(): void {
    this.produtoService.getAll().subscribe({
      next: (dados: any) => {
        this.produtos = dados;
        this.carregando = false;
      },
      error: (err: any) => {
        this.erro = 'Erro ao carregar produtos.';
        this.carregando = false;
      }
    });
  }
}