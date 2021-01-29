import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosp-bill-assistance',
  templateUrl: './hosp-bill-assistance.component.html',
  styleUrls: ['./hosp-bill-assistance.component.scss']
})
export class HospBillAssistanceComponent implements OnInit {

  headers = ["Release ID", "Hospital Assistance Given", "Recipient Name", "Field Agent ID", "Date Released"]
  rows = [
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
