import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';

import { 
  EventListComponent, 
  EventThumbnailComponent,
  EventService,
  EventDetailComponent,
  EventDetailActivatorComponent,
  CreateEventComponent,
  EventsResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  VoterService,
  UpvoteComponent,
  LocationValidator,
} from "./events/index";

import { NavBarComponent } from "./nav/nav-bar.component";
import { appRouter } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TOKEN_TOASTR, Toastr, TOKEN_JQUERY, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective } from './common';

let toastrRef: Toastr = window['toastr']
let jQueryRef: any = window['$']

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    Error404Component,
    NavBarComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    DurationPipe,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [
    { provide: TOKEN_TOASTR, useValue: toastrRef },
    { provide: TOKEN_JQUERY, useValue: jQueryRef },
    EventService,    
    EventsResolver,
    EventDetailActivatorComponent,
    AuthService,
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }