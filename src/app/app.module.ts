import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntroStyleComponent } from './intro-style/intro-style.component';
import { IntroStyleSubComponent } from './intro-style-sub/intro-style-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroStyleComponent,
    IntroStyleSubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
