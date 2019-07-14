import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostsDetalheComponent} from './posts-detalhe/posts-detalhe.component';
import {PostsNovoComponent} from './posts-novo/posts-novo.component';
import {PostsEditarComponent} from './posts-editar/posts-editar.component';
import {PostDeletarComponent} from './post-deletar/post-deletar.component';
import {UsuarioComponent} from './usuario/usuario.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    data: { title: 'Lista de posts' }
  },
  {
    path: 'posts-detalhe/:id',
    component: PostsDetalheComponent,
    data: { title: 'Detalhe do post' }
  },
  {
    path: 'posts-deletar/:id',
    component: PostDeletarComponent,
    data: { title: 'delete post' }
  },
  
  {
    path: 'posts-novo',
    component: PostsNovoComponent,
    data: { title: 'Adicionar Posts' }
  },
  {
    path: 'posts-editar/:id',
    component: PostsEditarComponent,
    data: { title: 'Editar o posts' }
  },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    data: { title: 'Usuarios'}
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login'}
   },
   { path: 'logout',
    component: LogoutComponent,
    data: {title: 'logout'}
  },

  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
