import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProdutosDetailComponent } from './components/produtos-detail/produtos-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { usuarioLogadoGuard } from './guards/usuario-logado.guard';
import { SairProdutoDetailGuard } from './guards/sair-produto-datail.guard';
import { ResistroLoginComponent } from './components/resistro-login/resistro-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [usuarioLogadoGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro-usuario',
    component: ResistroLoginComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
    canActivate: [usuarioLogadoGuard],
    children: [
      {
        path: ':cod',
        component: ProdutosDetailComponent,
        canDeactivate: [SairProdutoDetailGuard]
      },
    ]
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'ajuda',
    redirectTo: 'faq'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
