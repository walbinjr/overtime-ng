import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LocalStorageModule } from 'angular-2-local-storage';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { TimeValidatorDirective } from './time-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimeValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'app',
      storageType: 'localStorage'
    }),
    NgxMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
