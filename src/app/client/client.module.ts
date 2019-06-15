import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from '../api';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientHeaderComponent } from './client-header/client-header.component';
import { ClientCredentialsComponent } from './client-credentials/client-credentials.component';
import { ClientOauthPropertiesComponent } from './client-oauth-properties/client-oauth-properties.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { ClientListComponent } from './client-list/client-list.component';
import { FlowComponent } from './flow/flow.component';

@NgModule({
  declarations: [
    ClientFormComponent,
    ClientHeaderComponent,
    ClientCredentialsComponent,
    ClientOauthPropertiesComponent,
    ClientPanelComponent,
    ClientListComponent,
    FlowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ApiModule
  ],
  exports: [
    ClientFormComponent,
    ClientHeaderComponent,
    ClientCredentialsComponent,
    ClientOauthPropertiesComponent,
    ClientPanelComponent,
    ClientListComponent,
    FlowComponent
  ]
})
export class ClientModule { }
