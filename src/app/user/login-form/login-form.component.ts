import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ModelError } from 'src/app/api';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  hidePassword = true;

  error: ModelError;

  inProgress = false;

  @Output() authenticated = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder,
              private userService: UserService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.inProgress = true;
    this.error = null;

    this.userService.login(this.loginForm.value)
      .subscribe(
        user => {
          console.debug(user);
          this.authenticated.next(true);
          this.inProgress = false;
        },
        (error: HttpErrorResponse) => {
          console.debug(error);
          this.error = error.error;
          this.authenticated.next(false);
          this.inProgress = false;
        },
        () => {
          this.inProgress = false;
        }
      );

    formDirective.resetForm();
    this.loginForm.reset();
  }
}
