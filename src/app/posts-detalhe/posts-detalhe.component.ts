import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Post } from 'src/model/post';

@Component({
  selector: 'app-posts-detalhe',
  templateUrl: './posts-detalhe.component.html',
  styleUrls: ['./posts-detalhe.component.scss']
})
export class PostsDetalheComponent implements OnInit {
  
  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }

  id = 0;
  token: string;
  post: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.estaLogado()
    this.getPost()
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
        console.log(this.post)
      }
    )
}

}
