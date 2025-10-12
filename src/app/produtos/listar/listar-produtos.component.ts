import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../Produto';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  standalone: false,
})
export class ListarProdutosComponent implements OnInit {
  produtos: Produto[] = ["teste"] as any;
//  carregando = true;
  erro = '';

  constructor(private produtoService: ProdutosService) {
    console.log('ListarProdutosComponent criado');
  }

  ngOnInit(): void {
    console.log('ListarProdutosComponent ngOnInit');
    this.produtoService.getAll().subscribe({
      next: (dados: any) => {
        this.produtos = dados;
//        this.carregando = false;
      },
      error: (err: any) => {
        this.erro = 'Erro ao carregar produtos.';
//        this.carregando = false;
      }
    });
  }
}