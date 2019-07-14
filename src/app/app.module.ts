import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService} from './api.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { PostsComponent } from './posts/posts.component';
import { PostsDetalheComponent } from './posts-detalhe/posts-detalhe.component';
import { PostsNovoComponent } from './posts-novo/posts-novo.component';
import { PostsEditarComponent } from './posts-editar/posts-editar.component';
import {TokenInterceptor} from './interceptor/tokenInterceptor';

 
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PostDeletarComponent } from './post-deletar/post-deletar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    PostsComponent,
    PostsDetalheComponent,
    PostsNovoComponent,
    PostsEditarComponent,
    LoginComponent,
    LogoutComponent,
    PostDeletarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
        
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
