import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
    templateUrl: './create-event.component.html',
    styles: [`
         em {float:right; color:#E05C65; padding-left:10px}
        .error input {background-color: #E3C3C5}
        `]

})
export class CreateEventComponent {
    constructor(private router: Router, private eventService:EventService) {

    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues)
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }

    handleCancel() {
        this.router.navigate(['/events'])
    }
}