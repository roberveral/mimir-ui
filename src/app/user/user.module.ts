import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from '../api';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApiModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class UserModule { }
