import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { share, tap } from 'rxjs/operators';
import { HTTP_CACHE_CONFIG, HttpCacheConfig } from './cache-config';

import { HttpCacheManager } from './cache-manager.service';
import { KeySerializer } from './key-serializer';
import { CACHE_CONTEXT } from './cache-context';
import { isPlatformServer } from '@angular/common';

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {
  constructor(
    private httpCacheManager: HttpCacheManager,
    private keySerializer: KeySerializer,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(HTTP_CACHE_CONFIG) private config: HttpCacheConfig
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const context = request.context.get(CACHE_CONTEXT);

    if (isPlatformServer(this.platformId)) {
      return next.handle(request);
    }

    const key = this.keySerializer.serialize(request, context);

    const {
      cache = this.config.strategy === 'implicit',
      ttl,
      bucket,
      clearCachePredicate,
      version,
      mode,
      returnSource
    } = context;

    if (version) {
      const versions = this.httpCacheManager._getVersions();
      const currentVersion = versions.get(key);

      if (currentVersion !== version) {
        this.httpCacheManager.delete(key);
      }

      versions.set(key, version);
    }

    if (key && clearCachePredicate) {
      const requests = this.httpCacheManager._getRequests();
      const clearCache = clearCachePredicate(requests.get(key)!, requests.set(key, request).get(key)!, key);

      if (clearCache) {
        this.httpCacheManager.delete(key, { deleteRequests: false, deleteVersions: false });
      }
    }

    const canActivate = this.httpCacheManager._canActivate(request);

    if (this.httpCacheManager._isCacheable(canActivate, cache!)) {
      const queue = this.httpCacheManager._getQueue();

      bucket && bucket.add(key);

      if (queue.has(key)) {
        return queue.get(key)!;
      }

      if (this.httpCacheManager.validate(key)) {
        return mode === 'stateManagement' ? returnSource! : of(this.httpCacheManager.get(key));
      }

      const shared = next.handle(request).pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
              if (mode === 'stateManagement') {
                this.httpCacheManager._set(key, true, ttl || this.config.ttl);
              } else {
                const cache = this.httpCacheManager._resolveResponse(event);
                this.httpCacheManager._set(key, cache, ttl || this.config.ttl);
              }
              queue.delete(key);
            }
          },
          err => queue.delete(key)
        ),
        share()
      );

      queue.set(key, shared);

      return shared;
    }

    return next.handle(request);
  }
}
