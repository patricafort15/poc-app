import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/vms/models/event.model';

@Component({
  selector: 'app-vms-admin-profile',
  templateUrl: './vms-admin-profile.component.html',
  styleUrls: ['./vms-admin-profile.component.scss']
})
export class VmsAdminProfileComponent implements OnInit {

  public event: any;

  eventName: string;
  eventDate: string;
  eventLocation: string;
  eventPurpose: string;

  constructor() {
    this.event = new Event();
    
   }

  ngOnInit() {
  }

  onSubmit() : void {
    console.log(this.event)
    sessionStorage.setItem('Events',JSON.stringify(this.event));

  }

}
