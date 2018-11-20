import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({
      headers: req.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    });
    return next.handle(dupReq);
  }
}
