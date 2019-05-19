import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/api';

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

}
