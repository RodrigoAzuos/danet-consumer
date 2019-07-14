import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Token} from 'src/model/token'
import { ApiService } from '../api.service';
import { Usuario } from 'src/model/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = Usuario;
  token: Token;
  
  
  onSubmit(form){
    this.usuario = form.value;
    this.getToken()
  }
  
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
      
  }

  getToken(){
    this.apiService.getToken(this.usuario)
    .subscribe(
      res => {
        console.log(res)
        this.token = res;
        localStorage.setItem('token', this.token.token)
        this.router.navigate(['/posts']);
      }
    )  
  }

}
