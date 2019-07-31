import { Injectable } from '@angular/core'
import { IUser } from './user-model';

@Injectable()
export class AuthService {
  
    currentUser: IUser
    authenticateUser (userName: string, password: string) {
        this.currentUser =  {
            id: 1,
            userName: "nagaraj",
            firstName: "Nagaraj",
            lastName: "Muthuchamy"
        },
        console.log(this.currentUser)
    }

    UpdatePofile(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
        console.log(this.currentUser)
      }

    isAuthenticated() {
        return !!this.currentUser;
    }

}