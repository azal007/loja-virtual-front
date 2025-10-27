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
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module')
      .then(m => m.UsuariosModule)
  },
  // {
//  {
//    path: '**',
//    redirectTo: 'produtos/listar'
//  }
];
