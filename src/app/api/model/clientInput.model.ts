/**
 * OAuth Authorization Server API
 * Definition of the REST API exported by the OAuth Authorization Server.
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Model used for registering new clients in the Authorization Server.
 */
export interface ClientInput { 
    /**
     * Name of the client (for instance the application name).
     */
    name: string;
    /**
     * URL to the main page of the client application.
     */
    url: string;
    /**
     * URL to the callback used in the Authorization Code flow.
     */
    redirect_uri: string;
    /**
     * URL to the Application image logo.
     */
    logo?: string;
    /**
     * The OAuth grant types that the client is allowed to use in order to obtain an access token.
     */
    grant_types: Array<ClientInput.GrantTypesEnum>;
}
export namespace ClientInput {
    export type GrantTypesEnum = 'authorization_code' | 'password' | 'client_credentials';
    export const GrantTypesEnum = {
        AuthorizationCode: 'authorization_code' as GrantTypesEnum,
        Password: 'password' as GrantTypesEnum,
        ClientCredentials: 'client_credentials' as GrantTypesEnum
    };
}

