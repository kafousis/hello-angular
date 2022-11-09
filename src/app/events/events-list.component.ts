import { Component } from '@angular/core';

// This component is passing 'event1' to 'event-thumbnail' component
@Component({
    selector: 'events-list',
    template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <event-thumbnail [event]="event1"></event-thumbnail>
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
  }