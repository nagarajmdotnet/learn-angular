import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOKEN_TOASTR, Toastr } from '../common/toastr-service';

@Component({
  templateUrl: './profile.component.html',
  styles :[
    `
    em {float:right; color:#E05C65; padding-left:10px}
    .error input {background-color: #E3C3C5}
    `
  ]
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService, private router: Router, @Inject(TOKEN_TOASTR) private toastr: Toastr) {

  }

  profileForm: FormGroup
  firstNameTextBox: FormControl
  lastNameTextBox: FormControl

  ngOnInit() {

      this.firstNameTextBox = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern("[a-zA-z].*")])
      this.lastNameTextBox = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern("[a-zA-z].*")])

      this.profileForm = new FormGroup ({ 

        firstName: this.firstNameTextBox,
        lastName: this.lastNameTextBox

      })

    }

    updateProfile(formValues) {

      if (this.profileForm.valid)
      {
        //this.authService.UpdatePofile(this.firstNameTextBox.value, this.lastNameTextBox.value)
        this.toastr.success('Profile Saved!');
      }
        
    }

    validateFirstName() {
      return this.firstNameTextBox.valid || this.firstNameTextBox.untouched;
    }

    validateLastName() {
      return this.lastNameTextBox.valid || this.lastNameTextBox.untouched;
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
