import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router"
import { EventService } from '../shared/event-service';

@Injectable()
export class EventDetailActivatorComponent implements CanActivate {
    
    constructor(private router: Router, private eventService: EventService) {
    
    }

    canActivate(route: ActivatedRouteSnapshot)  {
        
        const eventExists = !!this.eventService.GetEvent(route.params['id'])

        if(!eventExists)
            this.router.navigate(['/404'])

        return eventExists;

    }
}