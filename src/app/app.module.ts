import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgOtpInputComponent } from './ng-otp-input/ng-otp-input.component';
import { KeysPipe } from './ng-otp-input/keys.pipe';
@NgModule({
  declarations: [AppComponent, NgOtpInputComponent, KeysPipe],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [KeysPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
