import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
