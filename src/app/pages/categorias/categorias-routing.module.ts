import { NgModule }                         from '@angular/core';
import { RouterModule, Routes }             from '@angular/router';
import { ListarCategoriasComponent }        from './listar/listar-categorias.component';
import { IncluirCategoriasComponent }        from './incluir/incluir-categoria.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'listar',
      component: ListarCategoriasComponent,
    },
    {
      path: 'incluir',
      component: IncluirCategoriasComponent,
    }
  ],
}];

export const routedComponents = [
  ListarCategoriasComponent,
  IncluirCategoriasComponent
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CategoriasRoutingModule { }