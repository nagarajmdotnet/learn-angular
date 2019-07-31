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
} from "./events/index";

import { NavBarComponent } from "./nav/nav-bar.component";
import { TOKEN_TOASTR, Toastr } from './common/toastr-service';
import { appRouter } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well';

let toastrRef: Toastr = window['toastr']

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
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [
    { provide: TOKEN_TOASTR, useValue: toastrRef },
    EventService,    
    EventsResolver,
    EventDetailActivatorComponent,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }