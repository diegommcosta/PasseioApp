import { AuthConfig } from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '706846877906-uhnfhjnk2p08p2lkqkqjnnfaupjoma4c.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}