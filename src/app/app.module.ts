import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule, apiConfigFactory } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthorizePageComponent } from './authorize-page/authorize-page.component';
import { ApiModule } from './api';
import { ClientModule } from './client/client.module';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { ClientRegisterPageComponent } from './client-register-page/client-register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthorizePageComponent,
    ClientsPageComponent,
    ClientRegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    ClientModule,
    ApiModule.forRoot(apiConfigFactory)
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
