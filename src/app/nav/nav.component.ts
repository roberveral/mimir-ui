import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  shouldToggle = false;
  isExpanded = false;

  constructor(private breakpointObserver: BreakpointObserver,
              public userService: UserService,
              private router: Router) {
    this.isHandset$.subscribe(value => { this.shouldToggle = value; });
  }

  toggleSidenav(drawer: MatSidenav): boolean {
    this.isExpanded = !this.isExpanded;
    if (this.shouldToggle) {
      drawer.toggle();
    }
    return false;
  }

  isUserAuthenticated() {
    return this.userService.getLoggedUser() != null;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
