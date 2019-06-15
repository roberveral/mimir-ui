import { Component, OnInit } from '@angular/core';
import { ClientService, Client } from 'src/app/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clientStream: Observable<Client[]>;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientStream = this.clientService.getAllClients();
  }

  onClientDelete() {
    this.clientStream = this.clientService.getAllClients();
  }

}
