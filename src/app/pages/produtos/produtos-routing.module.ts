import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';
import { IncluirProdutoComponent }          from './incluir/incluir-produto.component';
import { ListarProdutosParaVendaComponent } from './listar-para-venda/listar-produtos-para-venda.component';
import { ListarProdutosComponent }          from './listar/listar-produtos.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'listar-para-venda',
      component: ListarProdutosParaVendaComponent,
    },
    {
      path: 'listar',
      component: ListarProdutosComponent,
    },
    {
      path: 'incluir',
      component: IncluirProdutoComponent,
    }
  ],
}];

export const routedComponents = [
  ListarProdutosParaVendaComponent,
  ListarProdutosComponent,
  IncluirProdutoComponent
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ProdutosRoutingModule { }