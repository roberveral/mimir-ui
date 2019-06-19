import { Component, OnInit } from '@angular/core';
import { OAuthService, ModelError } from '../api';
import { ActivatedRoute, Params } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-authorize-page',
  templateUrl: './authorize-page.component.html',
  styleUrls: ['./authorize-page.component.scss']
})
export class AuthorizePageComponent implements OnInit {

  error: ModelError;

  constructor(private oauthService: OAuthService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(mergeMap(params => {
      if (!this.validateQueryParam(params, 'response_type') ||
        !this.validateQueryParam(params, 'client_id') ||
        !this.validateQueryParam(params, 'redirect_uri')) {
        return EMPTY;
      }
      return this.oauthService.authorizeOAuthClient(
        params.response_type,
        params.client_id,
        params.redirect_uri,
        params.scope,
        params.state,
        params.code_challenge,
        params.code_challenge_method
      );
    }))
    .subscribe(
      authorizeResponse => {
        console.log('Client authorized, going back to the app...');
        window.location.href = authorizeResponse.redirect_uri;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.error = error.error;
      }
    );
  }

  private validateQueryParam(params: Params, paramName: string): boolean {
    if (!params.hasOwnProperty(paramName)) {
      this.error = {
        error_type: 'InvalidParameters',
        error_reason: `${paramName} query parameter must be specified`
      };
      return false;
    }
    return true;
  }

}
