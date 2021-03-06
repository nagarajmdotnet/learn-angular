import { Component, OnInit, Inject } from "@angular/core";
import { EventService } from './shared/event-service';
import { TOKEN_TOASTR, Toastr } from '../common/toastr-service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component ({
    selector: "events-list",
    template:`
    <h1>Here are the upcoming Angular events!</h1>
    <hr/>
    <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
            <event-thumbnail (click)="handleThumbnailClicked(event.name)" [event]="event"></event-thumbnail>
        </div>
    </div>
    `,
    styles: [
      `
      .thumbnail { po }
      `
    ]
})
export class EventListComponent implements OnInit {
  
  events : IEvent[]

  constructor (private eventService: EventService, @Inject(TOKEN_TOASTR) private toastService: Toastr, private route: ActivatedRoute) {
  }

  ngOnInit() {
      this.events =  this.route.snapshot.data['events']
  }

  handleThumbnailClicked(name) {
    this.toastService.success(name);
  }
}