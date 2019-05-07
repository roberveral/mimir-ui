import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../api';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  private loginForm: FormGroup;

  private hidePassword: boolean;

  @Output() authenticated: EventEmitter<boolean>;

  constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService) {
    this.authenticated = new EventEmitter();
    this.hidePassword = true;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.authenticationService.signIn(this.loginForm.value)
    .subscribe(
      token => {
        localStorage.setItem('auth-server-user-token', token.token);
        this.authenticated.next(true);
      },
      error => {
        this.authenticated.next(false);
      }
    );
  }

}
