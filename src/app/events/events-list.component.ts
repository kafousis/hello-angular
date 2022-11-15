import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
    template: `
        <div>
			<h1>Upcoming Angular Events</h1>
			<hr/>
			<div class="row">
				<div *ngFor="let event of events" class="col-md-5">
					<event-thumbnail [event]="event"></event-thumbnail>
				</div>
			</div>
        </div>
    `
  })

export class EventsListComponent implements OnInit {
	events: any
	// Inject EventService so we can use it in this component
	constructor(private eventService: EventService, private route: ActivatedRoute) {
	}

	// lifecycle hook
	ngOnInit() {

		// case 1: get data directly
		//this.events = this.eventService.getEvents()

		// case 2: subscribe to an observable
		// and get data when ready
		//this.eventService.getEvents().subscribe(events => {this.events = events})

		// case 3: get data from the route
		// the data was pre-loaded by the EventListResolver
		this.events = this.route.snapshot.data['events']
	}
}