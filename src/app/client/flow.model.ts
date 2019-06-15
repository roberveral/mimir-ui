export class Flow {
    private constructor(public name: string,
                       public description: string,
                       public infoURL: string,
                       public recommendedApps: string[],
                       public grantType: string,
                       public responseType?: string) {}

    static AuthorizationCode = new Flow(
        "Authorization Code",
        "Used in user-facing apps and consists in getting an authorization code to exchange for an access token on behalf of the user",
        "https://www.oauth.com/oauth2-servers/server-side-apps/authorization-code/",
        ["Server-side Web", "Mobile (with PKCE)", "Desktop (with PKCE)", "SPA (with PKCE)"],
        "authorization_code",
        "code");

    static Password = new Flow(
        "Password",
        "Used in first-party native apps and consists in using the user credentials introduced in the application to obtain an access token on behalf of the user",
        "https://www.oauth.com/oauth2-servers/access-tokens/password-grant/",
        ["Native & First-party"],
        "password");

    static ClientCredentials = new Flow(
        "Client Credentials",
        "Client uses its credentials to obtain an access token to act on its own behalf",
        "https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/",
        ["Service-to-service"],
        "client_credentials");

    static getFlows(): Flow[] {
        return [this.AuthorizationCode, this.Password, this.ClientCredentials];
    }
}


