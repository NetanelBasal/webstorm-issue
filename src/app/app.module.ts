import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubscribeDirective } from '@ngneat/subscribe';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, SubscribeDirective, NzTableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
