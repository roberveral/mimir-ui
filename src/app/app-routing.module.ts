import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthorizePageComponent } from './authorize-page/authorize-page.component';
import { AuthGuard } from './shared/auth.guard';
import { NoAuthGuard } from './shared/no-auth.guard';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { ClientRegisterPageComponent } from './client-register-page/client-register-page.component';
import { NavLayoutComponent } from './nav-layout/nav-layout.component';

const routes: Routes = [
  {
    path: '', component: NavLayoutComponent,
    children: [
      { path: '', component: ClientsPageComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'clients',
    component: NavLayoutComponent,
    children: [
      { path: '', component: ClientsPageComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'clients/new', component: NavLayoutComponent,
    children: [
      { path: '', component: ClientRegisterPageComponent },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginPageComponent, canActivate: [NoAuthGuard] },
  { path: 'oauth/authorize', component: AuthorizePageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
