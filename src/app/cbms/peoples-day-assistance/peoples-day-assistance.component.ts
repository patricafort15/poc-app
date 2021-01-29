import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoples-day-assistance',
  templateUrl: './peoples-day-assistance.component.html',
  styleUrls: ['./peoples-day-assistance.component.scss']
})
export class PeoplesDayAssistanceComponent implements OnInit {

  headers = ["Release ID", "PD Assistance Given", "Recipient Name", "Field Agent ID", "Date Released"]
  rows = [
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
