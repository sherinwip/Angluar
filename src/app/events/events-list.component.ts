import {Component} from '@angular/core'
@Component(
    {
        selector:'events-list',
        template:`
        <div>
    <h1>Upcoming Angular Events </h1>
    <hr/>
    <events-thumbnail #thumbnail (eventClick) = "handleEventClick($event)" [event]="event1"></events-thumbnail>
    <button class="btn btn-primary" (click)="thumbnail.displayFoo()">Log me foo</button>
    </div>
    
    
        `
    }
)
export class EventsListComponent{
event1={
    id:1,
    name:'Angular Connect',
    date:'9/26/2018',
    time:'10:00 am',
    price:766.99,
    imageUrl:'/assets/images/angularconnect-shield.png',
    location:{
        address:'1057 DT',
        city:'London',
        country:'England'
    }
}

handleEventClick(data){
    console.log("sherin data recieved is ",data)
}
}