import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// services are registered at the root module

@NgModule({

  // import modules
  imports: [
    BrowserModule
  ],

  // register components, directives or pipes
  declarations: [
    AppComponent
  ],

  // register services
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
