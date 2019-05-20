import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../api';

@Component({
  selector: 'app-client-register-page',
  templateUrl: './client-register-page.component.html',
  styleUrls: ['./client-register-page.component.scss']
})
export class ClientRegisterPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClientRegistered(client: Client) {
    this.router.navigateByUrl('/clients');
  }

}
