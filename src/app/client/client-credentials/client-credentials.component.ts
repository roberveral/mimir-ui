import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/api';

@Component({
  selector: 'app-client-credentials',
  templateUrl: './client-credentials.component.html',
  styleUrls: ['./client-credentials.component.scss']
})
export class ClientCredentialsComponent implements OnInit {

  @Input() client: Client;

  private hideSecret = true;

  constructor() { }

  ngOnInit() {
  }

}
