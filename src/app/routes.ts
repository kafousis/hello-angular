import { Routes } from "@angular/router"  
import { EventsListComponent } from "./events/events-list.component"
import { EventDetailsComponent } from "./events/event-details/event-details.component"
import { CreateEventComponent } from "./events/create-event.component"
import { Error404Component } from "./errors/404.component"
import { EventRouterActivator } from "./events/event-details/event-route-activator.service"

// guard routes with a) function or b) service
export const appRoutes: Routes = [
    { path: 'events', component: EventsListComponent },

    { path: 'events/new', component: CreateEventComponent, 
            canDeactivate: ['canDeactivateCreateEvent']}, // a

    { path: 'events/:id', component: EventDetailsComponent, 
            canActivate: [EventRouterActivator] }, // b

    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
] 