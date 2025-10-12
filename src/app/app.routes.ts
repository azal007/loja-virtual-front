import { Routes } from '@angular/router';

export const routes: Routes = [
/*   {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'
  },
 */  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module')
      .then(m => m.ProdutosModule)
  },
//  {
//    path: '**',
//    redirectTo: 'produtos/listar'
//  }
];
