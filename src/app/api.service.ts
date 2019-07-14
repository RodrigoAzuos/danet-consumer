import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, take } from 'rxjs/operators';
import {Post} from 'src/model/post';
import {Perfil} from 'src/model/perfil';
import {Comentario} from 'src/model/comentario';
import {Token} from  'src/model/token';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    )
};
const apiUrl = 'http://localhost:8000/api/v1';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getToken (usuario){
    const url = `${apiUrl}/token/`;
    return this.http.post<Token>(url, usuario, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((token: Token) => console.log('Get Token')),
      catchError(this.handleError<Token>('Get token')),
      take(1)
    );
  }

  getPosts (token: string){
    const url = `${apiUrl}/posts/`;
    httpOptions.headers = httpOptions.headers.set('Authorization', `token ${token}`);
    console.log(httpOptions.headers.keys)
    return this.http.get<Post[]>(url, httpOptions)
      .pipe(
        tap(posts => console.log('leu os posts')),
        catchError(this.handleError('getPosts', [])),
        take(1)
      );
  }

  getPost (token: string, id : number){
    const url = `${apiUrl}/posts/${id}/`;
    httpOptions.headers = httpOptions.headers.set('Authorization', `token ${token}`);
    console.log(httpOptions.headers.keys)
    return this.http.get<Post>(url, httpOptions)
      .pipe(
        tap(posts => console.log('leu o post')),
        catchError(this.handleError('getPosts', [])),
        take(1)
      );
  }

  deletePost (token: string, id : number){
    const url = `${apiUrl}/posts/${id}/`;
    httpOptions.headers = httpOptions.headers.set('Authorization', `token ${token}`);
    console.log(httpOptions.headers.keys)
    return this.http.delete<Post>(url, httpOptions)
      .pipe(
        tap(posts => console.log('leu o post')),
        catchError(this.handleError('getPosts', [])),
        take(1)
      );
  }

  criarPost (token: string, post: Post){
    const url = `${apiUrl}/posts/`;
    httpOptions.headers = httpOptions.headers.set('Authorization', `token ${token}`);
    console.log(httpOptions.headers.keys)
    return this.http.post<Post>(url, post, httpOptions)
      .pipe(
        tap(posts => console.log('Criou o post')),
        catchError(this.handleError('criarPost', [])),
        take(1)
      );
  }

  editarPost (token: string,id: number, post: Post){
    const url = `${apiUrl}/posts/${id}/`;
    httpOptions.headers = httpOptions.headers.set('Authorization', `token ${token}`);
    console.log(httpOptions.headers.keys)
    return this.http.put<Post>(url, post, httpOptions)
      .pipe(
        tap(posts => console.log('Editou o post')),
        catchError(this.handleError('editarPost', [])),
        take(1)
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
