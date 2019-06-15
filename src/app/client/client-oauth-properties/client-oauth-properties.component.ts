import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/api';
import { Flow } from '../flow.model';

@Component({
  selector: 'app-client-oauth-properties',
  templateUrl: './client-oauth-properties.component.html',
  styleUrls: ['./client-oauth-properties.component.scss']
})
export class ClientOauthPropertiesComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit() {
  }

  getFlowForGrantType(grantType: String): Flow {
    return Flow.getFlows().find(flow => grantType === flow.grantType);
  }
}
