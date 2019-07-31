import { Component } from '@angular/core'
import { AuthService } from './auth.service';
import { Router } from '@angular/router'

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { color: red; float: right }
    `]
})
export class LoginComponent {
userName;
password;
mouseOverLogin;

constructor(private authService: AuthService, private router: Router) {

}

    login(formValues) {

        this.authService.authenticateUser(formValues.userName, formValues.password);

        this.router.navigate(['events']);

    }
    
    cancel() {
        this.router.navigate(['events']);
    }
}