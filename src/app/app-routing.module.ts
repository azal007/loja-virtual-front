import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//  {
//    path: '',
//    redirectTo: 'produtos',
//    pathMatch: 'full'
//  },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module')
      .then(m => m.ProdutosModule)
  },
  {
    path: 'exemplo-crud',
    loadChildren: () => import('./exemplo-crud/exemplo-crud.module')
      .then(m => m.ExemploCrudModule)
  },
//  {
//    path: '**',
//    redirectTo: 'produtos/listar'
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}