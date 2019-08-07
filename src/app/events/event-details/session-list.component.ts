import { Input, Component, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { VoterService } from './voter-service';
import { AuthService } from 'src/app/user/auth.service';

@Component({
    selector: "session-list",
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions : ISession[];
    @Input() filterBy : string;
    @Input() sortBy: string;

    visibleSessions : ISession[];

    constructor(public authService : AuthService, private voterService : VoterService) {
    }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.visibleSessions = this.sortBy === "name" ? this.visibleSessions.sort(sortByName) : this.visibleSessions.sort(sortByVotes)
        }
    }

    filterSessions(filterValue : string) {
        if (filterValue == 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(filter => filter.level.toLocaleLowerCase() == filterValue)
        }
    }

    toggleVote(session : ISession) {
        if (this.voterService.userHasVoted(session, this.authService.currentUser.userName))
        {
            this.voterService.deleteVoter(session, this.authService.currentUser.userName)
        }
        else
        {
            this.voterService.addVoter(session, this.authService.currentUser.userName)
        }
    }

    userHasVoted(session : ISession) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName)
    }

}

function sortByName(S1: ISession, S2: ISession) {
    if (S1.name > S2.name) return 1
    else if (S1.name === S2.name) return 0 
    else return -1
}

function sortByVotes(S1: ISession, S2: ISession) {
    return S2.voters - S1.voters
}