import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userReducer } from './state/user/user.reducer';
import { UserEffects } from './state/user/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore({ user: userReducer }),
    provideEffects(UserEffects),
    provideStoreDevtools({ 
      maxAge: 25, 
      logOnly: !isDevMode(),
      connectInZone: true 
    })
  ]
};