import { RouterModule, Routes }       from '@angular/router';
import { NgModule }                   from '@angular/core';
import { ListarUsuariosComponent }    from './listar/listar-usuarios-component';
import { IncluirUsuariosComponent }   from './incluir/incluir-usuarios-component';


const routes: Routes = [{
  path: '',
  children: [{
    path: 'listar',
    component: ListarUsuariosComponent
  },
  {
      path: 'incluir',
      component: IncluirUsuariosComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule{ }

export const routedComponents = [
  ListarUsuariosComponent,
  IncluirUsuariosComponent,
]
