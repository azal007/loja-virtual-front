import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path: '',
    redirectTo: 'produtos/listar-para-venda',
    pathMatch: 'full'
  },
 {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module')
      .then(m => m.ProdutosModule)
  },
//  {
//    path: '**',
//    redirectTo: 'produtos/listar'
//  }
];
