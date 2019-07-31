import { Component, Input, EventEmitter, Output } from "@angular/core";
import { IEvent } from './shared';


@Component({
    selector: "event-thumbnail",
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name | uppercase}}</h2>
        <div>Date: {{event.date | date:'shortDate'}}</div>

        <div [ngClass]="getTimeClass()" [ngSwitch]="event?.time">
            Time: {{event.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
    
        <div *ngIf="event.location?.address">Location: {{event.location?.address}}</div>
        <div *ngIf="event.url">Location: {{event.url}}</div>
        <div>Price: {{event?.price | currency:'USD'}}</div>
    </div>`,
    styles: [`
    .red { color: red !important }
    .bold { font-weight: bold }
    .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event:IEvent

    getTimeClass() {
        var isEarlyStart = this.event.time && this.event.time === '8:00 am';

        if (isEarlyStart)
            return ["red", "bold"];
        else
            return[];
    }

    

}