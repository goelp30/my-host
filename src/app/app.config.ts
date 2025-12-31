import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { commonInterceptor } from '../Interceptor/common.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([commonInterceptor])
    ),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)    
  ]
};
