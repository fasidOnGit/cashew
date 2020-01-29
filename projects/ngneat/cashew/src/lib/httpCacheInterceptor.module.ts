import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpCacheInterceptor } from './httpCacheInterceptor';
import { DefaultKeySerializer, KeySerializer } from './keySerializer';
import { DefaultHttpCacheStorage, HttpCacheStorage } from './httpCacheStorage';
import { HTTP_CACHE_CONFIG, HttpCacheConfig, mergeConfig } from './httpCacheConfig';
import { HttpCacheManager } from './httpCacheManager.service';
import { DefaultTTLManager, TTLManager } from './ttlManager';
import { DefaultHttpCacheGuard, HttpCacheGuard } from './httpCacheGuard';
import { RequestsQueue } from './requestsQueue';
import { HttpCacheLocalStorage } from './httpCacheLocalStorage';

@NgModule({})
export class HttpCacheInterceptorModule {
  static forRoot(config: Partial<HttpCacheConfig> = {}): ModuleWithProviders {
    const conf = mergeConfig(config);
    return {
      providers: [
        { provide: HTTP_CACHE_CONFIG, useValue: conf },
        { provide: KeySerializer, useClass: DefaultKeySerializer },
        {
          provide: HttpCacheStorage,
          useClass: conf.storage === 'memory' ? DefaultHttpCacheStorage : HttpCacheLocalStorage
        },
        { provide: TTLManager, useClass: DefaultTTLManager },
        { provide: HttpCacheGuard, useClass: DefaultHttpCacheGuard },
        { provide: HTTP_INTERCEPTORS, useClass: HttpCacheInterceptor, multi: true },
        HttpCacheManager,
        RequestsQueue
      ],
      ngModule: HttpCacheInterceptorModule
    };
  }
}
