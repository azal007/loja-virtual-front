import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './listar-produtos.component';
import { IncluirProdutoComponent } from './incluir-produto.component';

const routes: Routes = [{
  path: '',
  children: [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule { }

export const routedComponents = [
  ListarProdutosComponent,
  IncluirProdutoComponent
];
