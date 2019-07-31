import { Component } from "@angular/core";
import { EventService } from '../shared/event-service';
import { ActivatedRoute }  from "@angular/router"
import { IEvent, ISession } from '../shared/index'

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px }
        a {cursor:pointer}
    `]
})
export class EventDetailComponent {
    event:IEvent
    addMode: boolean
    filterBy = "all"
    sortBy = "name"
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit()
    {
        this.addMode = false
        this.event = this.eventService.GetEvent(this.route.snapshot.params['id']);
    }

    addNewSession() {
        this.addMode = true
    }

    showSessions() {
        this.addMode = false
    }

    addNewSessionHandler(session:ISession) {
        var nextId = Math.max.apply(null, this.event.sessions.map(x => x.id));
        nextId = nextId + 1
        session.id = nextId

        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event);
        this.addMode = false
    }

    cancelAddSessionHandler() {
        this.addMode = false
    }
}