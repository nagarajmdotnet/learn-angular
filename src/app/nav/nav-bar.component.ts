import { Component } from "@angular/core";
import { AuthService } from '../user/auth.service';

@Component({
    selector: "nav-bar",
    templateUrl: "nav-bar.component.html",
    styles: [`
        li > a.active { color: red }
    `]
})
export class NavBarComponent {

    constructor(private authService: AuthService) {

    }
}