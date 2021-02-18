import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/vms/models/event.model';

@Component({
  selector: 'app-vms-profile',
  templateUrl: './vms-profile.component.html',
  styleUrls: ['./vms-profile.component.scss']
})
export class VmsProfileComponent implements OnInit {

  public event: any;

  constructor() {
    this.event = new Event;
   }


  ngOnInit() {

    

  }

}
