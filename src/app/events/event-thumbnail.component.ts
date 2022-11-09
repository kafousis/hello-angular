import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">
            Click me!
        </button>
    </div>
    `
})

  export class EventThumbnailComponent {

    // @Input() means that 'event' is passed from another component
    // this is how we pass data from parent to child
    @Input() event: any

    
    // this is how we pass data from child to parent
    @Output() eventClick = new EventEmitter()

    handleClickMe(){
        this.eventClick.emit(this.event.name)
    }
  }