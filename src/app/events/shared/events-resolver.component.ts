import { Injectable } from "@angular/core";
import { EventService } from './event-service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map } from "rxjs/operators"

@Injectable()
export class EventsResolver implements Resolve<any> {
    
    constructor(private eventService:EventService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        
        return this.eventService.getEvents().pipe(map(events => events))
    }
}