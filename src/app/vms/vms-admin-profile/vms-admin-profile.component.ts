import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { EventsComponent } from 'src/app/lem/eventAdmin/events/events.component';
import { Event } from 'src/app/vms/models/event.model';



@Component({
  selector: 'app-vms-admin-profile',
  templateUrl: './vms-admin-profile.component.html',
  styleUrls: ['./vms-admin-profile.component.scss']
})
export class VmsAdminProfileComponent implements OnInit {

  public event: any;
  // public Event: Event;

  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventPurpose: string;

  alert: boolean=false;

  addEvent = new FormGroup({
    eventName: new FormControl(''),
    eventDate: new FormControl(''),
    eventLocation: new FormControl(''),
    eventPurpose: new FormControl('')
  })

  constructor() {
    
    // this.event = new Array<Event>();
    this.event = new Event;
    
   }

  ngOnInit() {
  }


  onSubmit() : void {
    // console.log(this.event)
    // sessionStorage.setItem('Events',JSON.stringify(this.event));
    // this.addEvents(this.event);
    
    this.alert=true;
    this.addEvent.reset({})

  }

  closeAlert(){
    this.alert=false;
  }

  addEvents(event) {
    console.log(Event);
    let events = [];
    if (sessionStorage.getItem('Events')) {
      events = JSON.parse(sessionStorage.getItem('Events'));
      events = [event, ...events];
    } else {
      events = [event];
    }

    sessionStorage.setItem('Events', JSON.stringify(event));
  }

}
