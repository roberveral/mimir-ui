import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective, FormControl, AbstractControl } from '@angular/forms';
import { ClientService, ClientInput, Client, ModelError } from 'src/app/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Flow } from '../flow.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  flows = Flow.getFlows();

  clientForm: FormGroup;

  inProgress = false;

  error: ModelError;

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
          flows: this.fb.array(this.flows.map((o, i) => new FormControl(false)), this.minLengthArray(1))
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
      grant_types: this.clientForm.value.steps[1].flows.map((checked: boolean, i: number) => {
        if (checked) {
          return this.flows[i].grantType;
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
