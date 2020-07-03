import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';



@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { //Utilizamos el interceptor para agregar headers
      req = req.clone({
        headers: new HttpHeaders({ access_token: environment.token}) //Agregamos el header token
      });
    return next.handle(req);
  }
}
