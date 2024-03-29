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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { AuthenticationToken } from '../model/authenticationToken.model';
import { UserLoginInput } from '../model/userLoginInput.model';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    protected basePath = 'http://localhost:8000/v0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {

        if (configuration) {
            this.configuration = configuration;
            this.configuration.basePath = configuration.basePath || basePath || this.basePath;

        } else {
            this.configuration.basePath = basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Obtains an authentication token for a regsitered user.
     * This endpoint allows to authenticate a User against the server IDP (Identity Provider) and obtains an authentication token to serve as session to interact with the rest of the endpoints of the Authorization Server, including the OAuth Authorize endpoint. 
     * @param userLoginInput Credentials of the user to authenticate.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public signIn(userLoginInput: UserLoginInput, observe?: 'body', reportProgress?: boolean): Observable<AuthenticationToken>;
    public signIn(userLoginInput: UserLoginInput, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AuthenticationToken>>;
    public signIn(userLoginInput: UserLoginInput, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AuthenticationToken>>;
    public signIn(userLoginInput: UserLoginInput, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userLoginInput === null || userLoginInput === undefined) {
            throw new Error('Required parameter userLoginInput was null or undefined when calling signIn.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<AuthenticationToken>(`${this.configuration.basePath}/auth/sign-in`,
            userLoginInput,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
