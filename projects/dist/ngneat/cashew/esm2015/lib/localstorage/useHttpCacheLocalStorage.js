import { TTLManager } from '../ttlManager';
import { HttpCacheStorage } from '../httpCacheStorage';
import { HttpCacheLocalStorage } from './httpCacheLocalStorage';
import { LocalStorageTTLManager } from './localStorageTtlManager';
export const useHttpCacheLocalStorage = [
    { provide: HttpCacheStorage, useClass: HttpCacheLocalStorage },
    { provide: TTLManager, useClass: LocalStorageTTLManager }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlSHR0cENhY2hlTG9jYWxTdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbmduZWF0L2Nhc2hldy9zcmMvbGliL2xvY2Fsc3RvcmFnZS91c2VIdHRwQ2FjaGVMb2NhbFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRztJQUN0QyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUU7SUFDOUQsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTtDQUMxRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVFRMTWFuYWdlciB9IGZyb20gJy4uL3R0bE1hbmFnZXInO1xuaW1wb3J0IHsgSHR0cENhY2hlU3RvcmFnZSB9IGZyb20gJy4uL2h0dHBDYWNoZVN0b3JhZ2UnO1xuaW1wb3J0IHsgSHR0cENhY2hlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9odHRwQ2FjaGVMb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlVFRMTWFuYWdlciB9IGZyb20gJy4vbG9jYWxTdG9yYWdlVHRsTWFuYWdlcic7XG5cbmV4cG9ydCBjb25zdCB1c2VIdHRwQ2FjaGVMb2NhbFN0b3JhZ2UgPSBbXG4gIHsgcHJvdmlkZTogSHR0cENhY2hlU3RvcmFnZSwgdXNlQ2xhc3M6IEh0dHBDYWNoZUxvY2FsU3RvcmFnZSB9LFxuICB7IHByb3ZpZGU6IFRUTE1hbmFnZXIsIHVzZUNsYXNzOiBMb2NhbFN0b3JhZ2VUVExNYW5hZ2VyIH1cbl07XG4iXX0=