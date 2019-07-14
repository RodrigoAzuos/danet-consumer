import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-deletar',
  templateUrl: './post-deletar.component.html',
  styleUrls: ['./post-deletar.component.scss']
})
export class PostDeletarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }

  id = 0;
  token: string;
  post: any;

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.estaLogado();
    this.deletePost();
    this.router.navigate(['/posts']);
  }

  estaLogado(){
    if (localStorage.length == 0){
      this.router.navigate(['/login']);
    }else{
      this.token = localStorage.getItem('token');
    }
  }

  deletePost(){ 
    this.apiService.deletePost(this.token, this.id)
    .subscribe(
      res => {
        this.post = res
        console.log(this.post)
      }
    )
}

}
