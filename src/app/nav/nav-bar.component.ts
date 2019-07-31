import { Component, Inject } from "@angular/core";
import { AuthService } from '../user/auth.service';
import { EventService, ISession } from '../events';
import { TOKEN_JQUERY } from '../common';

@Component({
    selector: "nav-bar",
    templateUrl: "nav-bar.component.html",
    styles: [`
        li > a.active { color: red }
    `]
})
export class NavBarComponent {
    searchTerm: string = ""
    foundSessions: ISession[] = []
    constructor(private authService: AuthService, private eventService: EventService, @Inject(TOKEN_JQUERY) private jquery : any) {

    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(session => {

            this.foundSessions = session
            
            this.jquery('#simple-modal').modal({})

        });
    }
}