import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';

import { NavBarComponent } from './nav/navbar.component';

// services are registered at the root module

@NgModule({

  // import modules
  imports: [
    BrowserModule
  ],

  // register components, directives or pipes
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],

  // register services
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
