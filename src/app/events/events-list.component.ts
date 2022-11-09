import { Component } from '@angular/core';

// pass data from parent to child with [event]="event1"
// this component is passing 'event1' to 'event-thumbnail' component

// pass data from child to parent with (eventClick)="handleEventClicked($event)" 
// when eventClick event is fired from 'event-thumbnail' call handleEventClicked($event)
@Component({
    selector: 'events-list',
    template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
      <h3>Access property through template variable: {{thumbnail.thumbnailProperty}}</h3>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()">
        Call method through template variable
      </button>
    </div>
    `
  })

  export class EventsListComponent {

    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '26/9/2022',
        time: '11.00am',
        price: 210,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: 'Fifth Avenue',
            city: 'New York',
            country: 'USA'
        }
    }

    handleEventClicked(data){
      console.log('received: ', data)
  }
  }