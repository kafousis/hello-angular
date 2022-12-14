import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>

            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                Time: {{event.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>

            <div>Price: \${{event.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span>{{event.location.city}}, {{event.location.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{ event.onlineUrl }}
            </div>
            <!-- 
            <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
            -->
        </div>
    `,
    styles: [`
        .thumbnail { min-height: 210px; }  
        .well div { color: #bbb; }
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
    `]
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

    // public property that can be accessed from other components
    thumbnailProperty: any = "This is my thumbnail property"

    // public method that can be called from other components
    logFoo() {
        console.log('This is logFoo() method from EventThumbnail Component')
    }

    getStartTimeClass() {

        // ngClass expects an object or (seperated classes) string/array to be returned

        // return object
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return {green: isEarlyStart, bold: isEarlyStart}

        // OR return string/array
        // if (isEarlyStart)_{
        //     return 'green bold' // or return ['green', 'bold']
        // }
    }
  }