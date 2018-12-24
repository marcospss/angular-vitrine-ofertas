import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HttpCacheService } from 'app/core/http-cache.service';

@Injectable({
    providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService: HttpCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /**
     * Transmitir as solicitações não armazenáveis em cache e invalidar o cache
     */
    if (req.method !== 'GET') {
      console.log(`Invalidando o cache: ${req.method} ${req.url}`);
      this.cacheService.invalidateCache();
      return next.handle(req);
    }

    /**
     * Tentativa de recuperar uma resposta em cache
     */
    const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

    /**
     * Retorna a resposta armazenada no cache
     */
    if (cachedResponse) {
      console.log(`Retornando uma resposta do cache: ${cachedResponse.url}`);
      console.log(cachedResponse);
      return of(cachedResponse);
    }

    /**
     * Envia solicitação ao servidor e adiciona a resposta no cache
     */
    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log(`Adicionando item ao cache: ${req.url}`);
            this.cacheService.put(req.url, event);
          }
        })
      );

  }
}
