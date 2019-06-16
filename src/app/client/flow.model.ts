export class Flow {
    private constructor(public name: string,
                       public description: string,
                       public infoURL: string,
                       public recommendedApps: string[],
                       public grantType: string,
                       public responseType?: string) {}

    static AuthorizationCode = new Flow(
        "Authorization Code",
        "Consists in getting an authorization code after the user gives consent to the client so it can be exchanged for an access token to act on behalf of the user and access OAuth 2.0 Protedted Resources.",
        "https://www.oauth.com/oauth2-servers/authorization/",
        ["Server-side Web", "Mobile (with PKCE)", "Desktop (with PKCE)", "SPA (with PKCE)"],
        "authorization_code",
        "code");

    static Password = new Flow(
        "Password",
        "Consists in obtaining the end-user credentials and exchange them directly for an access token. Given that the user has to introduce his credentials in the client it MUST only be used by first-party apps.",
        "https://www.oauth.com/oauth2-servers/access-tokens/password-grant/",
        ["First-party native apps"],
        "password");

    static ClientCredentials = new Flow(
        "Client Credentials",
        "Client uses its credentials to obtain an access token to act on its own behalf and access its own resources. No end-user involved.",
        "https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/",
        ["Service-to-service"],
        "client_credentials");

    static getFlows(): Flow[] {
        return [this.AuthorizationCode, this.Password, this.ClientCredentials];
    }
}


