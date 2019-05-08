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

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthorizePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    ApiModule.forRoot(apiConfigFactory)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
