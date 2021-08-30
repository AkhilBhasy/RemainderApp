import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events:any
uid:any

  constructor(public ds:DataService) { 
    this.uid=localStorage.getItem("currentAcc")
    this.ds.getEvents(this.uid)
    .subscribe((result:any)=>{
      if(result){
        this.events=result.events
      }
    },
    (result)=>{
      alert(result.error.message)
    }
      )
    
    console.log(this.events)
    
  }


  ngOnInit(): void {
  }

}
