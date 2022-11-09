import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
  })

  export class EventsListComponent {

    event = {
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