import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';

import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';

// services are registered at the root module

@NgModule({

  // import modules
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],

  // register components, directives or pipes
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent
  ],

  // register services
  providers: [
    EventService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
