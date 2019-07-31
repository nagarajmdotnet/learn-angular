import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <div class="container">
     <nav-bar></nav-bar>
      <router-outlet></router-outlet>
    </div>
    `
  ,
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
