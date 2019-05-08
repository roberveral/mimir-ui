import { Component, OnInit } from '@angular/core';
import { OAuth20Service, ModelError } from '../api';
import { ActivatedRoute } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-authorize-page',
  templateUrl: './authorize-page.component.html',
  styleUrls: ['./authorize-page.component.scss']
})
export class AuthorizePageComponent implements OnInit {

  private error: ModelError;

  constructor(private oauthService: OAuth20Service,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(mergeMap(params => {
      if (!params.hasOwnProperty('client_id')) {
        this.error = {
          error_type: 'InvalidParameters',
          error_reason: 'client_id query parameter must be specified'
        };
        return EMPTY;
      }
      return this.oauthService.authorizeOAuthClient(
        params.response_type,
        params.client_id,
        params.redirect_uri,
        params.scope,
        params.state
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

}
