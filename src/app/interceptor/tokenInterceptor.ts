import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    
        const token = localStorage.getItem('token');

        if (token){
            const newRequest = request.clone({setHeaders: {'Authorization': `token ${token}`}});
            console.log(newRequest)
            return next.handle(newRequest);
        } else{
            return next.handle(request);
        }
  }
}