import { HttpInterceptorFn } from '@angular/common/http';

export const commonInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
    responseType: req.responseType || 'json',
  });
  return next(req);
};
