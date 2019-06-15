import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { ApiModule } from '../api';
import { UserPictureComponent } from './user-picture/user-picture.component';

@NgModule({
  declarations: [LoginFormComponent, UserPictureComponent],
  imports: [
    CommonModule,
    SharedModule,
    ApiModule
  ],
  exports: [
    LoginFormComponent,
    UserPictureComponent
  ]
})
export class UserModule { }
