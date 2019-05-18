import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, FormControl, AbstractControl } from '@angular/forms';
import { ClientService, ClientInput, Client, ModelError } from 'src/app/api';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  private grantTypes = [{
    name: "Authorization Code",
    value: "authorization_code",
    infoURL: "https://www.oauth.com/oauth2-servers/server-side-apps/authorization-code/",
    description: "Used in user-facing apps and consists in getting an authorization code to exchange for an access token on behalf of the user"
  },
  {
    name: "Password",
    value: "password",
    infoURL: "https://www.oauth.com/oauth2-servers/access-tokens/password-grant/",
    description: "Used in first-party native apps and consists in using the user credentials introduced in the application to obtain an access token on behalf of the user"
  },
  {
    name: "Client Credentials",
    value: "client_credentials",
    infoURL: "https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/",
    description: "Client uses its credentials to obtain an access token to act on its own behalf"
  }]

  private clientForm: FormGroup;

  private inProgress = false;

  private error: ModelError;

  @Output() clientRegistered = new EventEmitter<Client>();

  constructor(private fb: FormBuilder,
              private clientService: ClientService) { }

  ngOnInit() {
    this.clientForm = this.fb.group({
      steps: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          url: ['', [Validators.required, Validators.pattern('https?://.+')]],
          logo: ['', Validators.pattern('https?://.+')],
        }),
        this.fb.group({
          redirect_uri: ['', [Validators.required, Validators.pattern('https?://.+')]],
          grant_types: this.fb.array(this.grantTypes.map((o, i) => new FormControl(false)), this.minLengthArray(1))
        })
      ])
    });
    
  }

  onSubmit() {
    this.inProgress = true;
    this.error = null;

    const clientInput: ClientInput = {
      name: this.clientForm.value.steps[0].name,
      url: this.clientForm.value.steps[0].url,
      logo: this.clientForm.value.steps[0].logo,
      redirect_uri: this.clientForm.value.steps[1].redirect_uri,
      grant_types: this.clientForm.value.steps[1].grant_types.map((checked: boolean, i: number) => {
        if (checked) {
          return this.grantTypes[i].value;
        } else {
          return null;
        }
      }).filter(value => value != null)
    }

    this.clientService.registerClient(clientInput)
      .subscribe(client => {
        console.debug(client);
        this.clientRegistered.next(client);
        this.inProgress = false;
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.error = err.error;
        this.inProgress = false;
      },
      () => {
        this.inProgress = false;
      });
  }

  minLengthArray(min: number) {
    return (c: AbstractControl): {[key: string]: any} => {
        if (c.value.filter(value => value).length >= min)
            return null;

        return { 'minLengthArray': {valid: false }};
    }
  }
}
