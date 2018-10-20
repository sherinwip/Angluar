import {Component,Input, EventEmitter, Output} from '@angular/core'
@Component(
    {
        selector:'events-thumbnail',
        template:`
        <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date:{{event.date}}</div>
    <div>Time:{{event.time}}</div>
    <div>Price:\${{event.price}}</div>
    <div>
    <span>Location:{{event.location.address}}</span>   
    <span class="pad-left">{{event.location.city}},{{event.location.country}}</span>    
    </div>    
    </div>
    `,
    styles:[
        `
        .thumbnail {min-height:210px;}
        .pad-left {margin-left :10px;}
        
        `
    ]
        
    }
    
)
export class EventThumbnailComponent{
@Input() event:any;
@Output()eventClick = new EventEmitter()

handleClickMe(){
    this.eventClick.emit(this.event.name)
}

displayFoo(){
    console.log("sherin here is the foo")
}
    
}
