import { RouterModule, Routes }       from '@angular/router';
import { NgModule }                   from '@angular/core';

import { BuscarUsuariosComponent }    from './buscarPorId/buscar-usuarios-component';
import { ListarUsuariosComponent }    from './listar/listar-usuarios-component';
import { IncluirUsuariosComponent }   from './incluir/incluir-usuarios-component';
import { AtualizarUsuariosComponent } from './atualizar/atualizar-usuarios-component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'buscar-por-id',
      component: BuscarUsuariosComponent
    },
    {
      path: 'listar',
      component: ListarUsuariosComponent
    },
    {
      path: 'incluir',
      component: IncluirUsuariosComponent
    },
    {
      path: 'atualizar',
      component: AtualizarUsuariosComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule{ }

export const routedComponents = [
  BuscarUsuariosComponent,
  ListarUsuariosComponent,
  IncluirUsuariosComponent,
  AtualizarUsuariosComponent,
]
