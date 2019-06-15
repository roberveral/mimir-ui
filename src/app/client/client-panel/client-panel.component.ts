import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client, ClientService } from 'src/app/api';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.scss']
})
export class ClientPanelComponent implements OnInit {

  @Input() client: Client;

  @Output() deleted = new EventEmitter<Client>();

  expanded = false;

  constructor(private clientService: ClientService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  delete() {
    this.clientService.deleteClient(this.client.client_id)
    .subscribe(() => {
      this.deleted.next(this.client);
      this._snackBar.open(`Client '${this.client.name}' deleted`, "OK", {
        duration: 5000,
      });
    },
    error => {
      this._snackBar.open(`Unable to delete client '${this.client.name}'`, "OK", {
        duration: 5000,
      });
    })
  }

}
