import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/api';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  @Input() client: Client;

  constructor() { }

  ngOnInit() {
  }

  getLogo(): string {
    return this.client.logo || 'https://cdn-images-1.medium.com/max/672/1*UfrfhbhfeeA-lPvhy0s7QQ.png';
  }
}
