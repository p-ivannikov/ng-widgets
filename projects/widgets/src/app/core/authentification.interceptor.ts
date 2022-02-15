import { Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YANDEX_ID } from './tokens';

@Injectable()
export class AuthentificationInterceptor implements HttpInterceptor {

  constructor(
    @Inject(YANDEX_ID) private readonly key: string
  ) {}

  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req.clone({ setHeaders: { 'X-Yandex-API-Key': this.key } }));
  }
}
