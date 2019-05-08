import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthorizePageComponent } from './authorize-page/authorize-page.component';
import { AuthGuard } from './shared/auth.guard';
import { NoAuthGuard } from './shared/no-auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [NoAuthGuard] },
  { path: 'oauth/authorize', component: AuthorizePageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
