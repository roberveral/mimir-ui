import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatDividerModule
} from '@angular/material';
import { Configuration, ConfigurationParameters } from '../api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  exports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ]
})
export class SharedModule { }


export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    accessToken: () => localStorage.getItem('authenticated_user_token')
  };
  return new Configuration(params);
}