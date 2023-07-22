import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      config: {
        authority: environment.oidcconfig.authority,
        redirectUrl: environment.oidcconfig.redirectUrl,
        postLogoutRedirectUri: environment.oidcconfig.postLogoutRedirectUri,
        clientId: environment.oidcconfig.clientId,
        scope: environment.oidcconfig.scope,
        responseType: environment.oidcconfig.responseType,
        silentRenew: environment.oidcconfig.silentRenew,
        useRefreshToken: environment.oidcconfig.useRefreshToken,
        logLevel: environment.oidcconfig.logLevel,
      },
    }),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.prod,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
