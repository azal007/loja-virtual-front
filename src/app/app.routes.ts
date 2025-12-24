import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos/listar-para-venda',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component')
      .then(m => m.LoginComponent)
  },
  {
    path: 'produtos',
    loadChildren: () => import('./pages/produtos/produtos.module')
      .then(m => m.ProdutosModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module')
      .then(m => m.UsuariosModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./pages/carrinho/carrinho.module')
      .then(m => m.CarrinhoModule)
  },
  // {
  //   path: 'categorias',
  //   loadChildren: () => import('./pages/categorias/categorias.module')
  //     .then(m => m.CategoriasModule)
  // },
];
