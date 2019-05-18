import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from '../api';
import { ClientFormComponent } from './client-form/client-form.component';

@NgModule({
  declarations: [ClientFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApiModule
  ],
  exports: [
    ClientFormComponent
  ]
})
export class ClientModule { }
