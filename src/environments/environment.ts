import { LogLevel } from 'angular-auth-oidc-client';
import { IConfig } from './config';

export const environment: IConfig = {
  prod: false,
  oidcconfig: {
    authority: 'https://localhost:5005',
    clientId: 'bc916d46-3ff6-434d-8c88-5c16e5a7571a',
    scope: 'openid profile',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    responseType: 'code',
    silentRenew: false,
    useRefreshToken: false,
    logLevel: LogLevel.Debug,
  },
};
