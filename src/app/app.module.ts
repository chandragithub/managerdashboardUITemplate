import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentModule } from "./common/common.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
