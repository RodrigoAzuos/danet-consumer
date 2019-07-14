import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-posts-editar',
  templateUrl: './posts-editar.component.html',
  styleUrls: ['./posts-editar.component.scss']
})
export class PostsEditarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }

  id = 0;
  token: string;
  post: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.estaLogado();
    this.getPost();
  }

  estaLogado(){
    if (localStorage.length == 0){
      this.router.navigate(['/login']);
    }else{
      this.token = localStorage.getItem('token');
    }
  }

  getPost(){ 
    this.apiService.getPost(this.token, this.id)
    .subscribe(
      res => {
        this.post = res
      }
    )
}

onSubmit(form){
  this.post.resumo = form.value['resumo'];
  console.log(this.post);
  this.editPost();
}

editPost(){ 
  this.apiService.editarPost(this.token, this.id, this.post)
  .subscribe(
    res => {
      this.post = res
      this.router.navigate([`/posts-detalhe/${this.post.id}`]);
    }
  )
}

}
