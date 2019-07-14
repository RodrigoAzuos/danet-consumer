import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { tokenKey } from '@angular/core/src/view';
import { Token } from 'src/model/token';
import {Post} from 'src/model/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  token: string;
  posts: Post[];
  
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.estaLogado();
    this.getPosts();
    }

  estaLogado(){
    if (localStorage.length == 0){
      this.router.navigate(['/login']);
    }else{
      this.token = localStorage.getItem('token');
    }
  }

  getPosts(){ 
      this.apiService.getPosts(this.token)
      .subscribe(
        res => {
          this.posts = res
          console.log(this.posts)
        }
      )
  }
}
