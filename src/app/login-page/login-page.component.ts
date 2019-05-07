import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  onUserAuthenticated(authenticated: boolean) {
    if (authenticated) {
      this.activeRoute.queryParams.subscribe(params => {
        const redirectUrl = params.returnUrl || '/';

        this.router.navigate([redirectUrl]);
      });
    }
  }
}
