import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
      const accessToken = this.tokenService.getToken();

      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer' + accessToken
        }

      });
      return next.handle(req);
  }
}
