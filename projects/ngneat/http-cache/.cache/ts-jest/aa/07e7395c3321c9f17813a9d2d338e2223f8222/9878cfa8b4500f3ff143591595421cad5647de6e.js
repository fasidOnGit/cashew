"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var httpCacheConfig_1 = require("./httpCacheConfig");
var deleteByRegex_1 = require("./deleteByRegex");
var TTLManager = /** @class */ (function () {
    function TTLManager() {
    }
    return TTLManager;
}());
exports.TTLManager = TTLManager;
var DefaultTTLManager = /** @class */ (function () {
    function DefaultTTLManager(config) {
        this.config = config;
        this.cache = new Map();
    }
    DefaultTTLManager.prototype.isValid = function (key) {
        return this.cache.get(key) > new Date().getTime();
    };
    DefaultTTLManager.prototype.set = function (key, ttl) {
        var resolveTTL = ttl || this.config.ttl.default;
        this.cache.set(key, new Date().setMilliseconds(resolveTTL));
    };
    DefaultTTLManager.prototype.delete = function (key) {
        if (!key) {
            this.cache.clear();
            return;
        }
        if (typeof key === 'string') {
            this.cache.delete(key);
            return;
        }
        deleteByRegex_1.deleteByRegex(key, this.cache);
    };
    DefaultTTLManager = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__param(0, core_1.Inject(httpCacheConfig_1.HTTP_CACHE_CONFIG)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], DefaultTTLManager);
    return DefaultTTLManager;
}());
exports.DefaultTTLManager = DefaultTTLManager;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiQzpcXFVzZXJzXFxJdGF5XFxwcm9qZWN0c1xcb3BlbnNvdXJjZXNcXGh0dHAtY2FjaGVcXHByb2plY3RzXFxuZ25lYXRcXGh0dHAtY2FjaGVcXHNyY1xcbGliXFx0dGxNYW5hZ2VyLnRzIiwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFtRDtBQUNuRCxxREFBdUU7QUFDdkUsaURBQWdEO0FBRWhEO0lBQUE7SUFJQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpxQixnQ0FBVTtBQU9oQztJQUdFLDJCQUErQyxNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUY5RCxVQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7SUFFK0IsQ0FBQztJQUUxRSxtQ0FBTyxHQUFQLFVBQVEsR0FBVztRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVELCtCQUFHLEdBQUgsVUFBSSxHQUFXLEVBQUUsR0FBWTtRQUMzQixJQUFJLFVBQVUsR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBRWhELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sR0FBcUI7UUFDMUIsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBYSxDQUFDLENBQUM7WUFDakMsT0FBTztTQUNSO1FBRUQsNkJBQWEsQ0FBQyxHQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUEzQlUsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7UUFJRSxtQkFBQSxhQUFNLENBQUMsbUNBQWlCLENBQUMsQ0FBQTs7T0FIM0IsaUJBQWlCLENBNEI3QjtJQUFELHdCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksOENBQWlCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSXRheVxccHJvamVjdHNcXG9wZW5zb3VyY2VzXFxodHRwLWNhY2hlXFxwcm9qZWN0c1xcbmduZWF0XFxodHRwLWNhY2hlXFxzcmNcXGxpYlxcdHRsTWFuYWdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhUVFBfQ0FDSEVfQ09ORklHLCBIdHRwQ2FjaGVDb25maWcgfSBmcm9tICcuL2h0dHBDYWNoZUNvbmZpZyc7XG5pbXBvcnQgeyBkZWxldGVCeVJlZ2V4IH0gZnJvbSAnLi9kZWxldGVCeVJlZ2V4JztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRUTE1hbmFnZXIge1xuICBhYnN0cmFjdCBpc1ZhbGlkKGtleTogc3RyaW5nKTogYm9vbGVhbjtcbiAgYWJzdHJhY3Qgc2V0KGtleTogc3RyaW5nLCB0dGw/OiBudW1iZXIpOiB2b2lkO1xuICBhYnN0cmFjdCBkZWxldGUoa2V5OiBzdHJpbmcgfCBSZWdFeHApOiB2b2lkO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVmYXVsdFRUTE1hbmFnZXIge1xuICBwcml2YXRlIGNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEhUVFBfQ0FDSEVfQ09ORklHKSBwcml2YXRlIGNvbmZpZzogSHR0cENhY2hlQ29uZmlnKSB7fVxuXG4gIGlzVmFsaWQoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQoa2V5KSA+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCB0dGw/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgcmVzb2x2ZVRUTCA9IHR0bCB8fCB0aGlzLmNvbmZpZy50dGwuZGVmYXVsdDtcblxuICAgIHRoaXMuY2FjaGUuc2V0KGtleSwgbmV3IERhdGUoKS5zZXRNaWxsaXNlY29uZHMocmVzb2x2ZVRUTCkpO1xuICB9XG5cbiAgZGVsZXRlKGtleT86IHN0cmluZyB8IFJlZ0V4cCk6IHZvaWQge1xuICAgIGlmICgha2V5KSB7XG4gICAgICB0aGlzLmNhY2hlLmNsZWFyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmNhY2hlLmRlbGV0ZShrZXkgYXMgc3RyaW5nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkZWxldGVCeVJlZ2V4KGtleSBhcyBSZWdFeHAsIHRoaXMuY2FjaGUpO1xuICB9XG59XG4iXSwidmVyc2lvbiI6M30=