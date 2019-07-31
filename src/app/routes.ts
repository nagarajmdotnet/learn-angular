import { Routes } from "@angular/router";
import { 
    EventListComponent, 
    EventDetailComponent,
    EventDetailActivatorComponent,
    CreateEventComponent,
    EventsResolver,
    CreateSessionComponent
  } from "./events/index";
  
import { Error404Component } from './errors/404.component';

export const appRouter: Routes  = [
    { path: 'events/new', component : CreateEventComponent  },
    { path: 'sessions/new', component : CreateSessionComponent  },
    { path: 'events/:id', component : EventDetailComponent, canActivate: [EventDetailActivatorComponent]  },
    { path: 'events', component : EventListComponent, resolve: {events: EventsResolver}  },    
    { path: '404', component: Error404Component },
    
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '', component : EventListComponent, pathMatch: 'full' },
]