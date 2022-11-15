import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { EventService } from "./shared/event.service";

import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor (private eventService: EventService) {}

    // pre-loadind data for component
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.eventService.getEvents().pipe(map(events => events))
    }
    
}