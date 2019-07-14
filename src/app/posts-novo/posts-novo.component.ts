import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Post } from 'src/model/post';

@Component({
  selector: 'app-posts-novo',
  templateUrl: './posts-novo.component.html',
  styleUrls: ['./posts-novo.component.scss']
})
export class PostsNovoComponent implements OnInit {

  token: string;
  post: any;
  
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.estaLogado();
    this.token = localStorage.getItem('token');
    console.log(this.token)
  }

  estaLogado(){
    if (localStorage.length == 0){
      this.router.navigate(['/login']);
    }else{
      this.token = localStorage.getItem('token');
    }
  }

  criarPosts(){ 
    this.apiService.criarPost(this.token, this.post)
    .subscribe(
      res => {
        this.post = res
        console.log(this.post)
        this.router.navigate([`/posts-detalhe/${this.post.id}`]);
      }
    )
}

onSubmit(form){
  this.post = form.value;
  this.criarPosts();
}


}
