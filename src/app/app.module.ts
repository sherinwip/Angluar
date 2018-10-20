import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import {EventsListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import {NavBarComponent} from './nav/navbar.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
