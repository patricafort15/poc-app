import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizen-benefits-history',
  templateUrl: './citizen-benefits-history.component.html',
  styleUrls: ['./citizen-benefits-history.component.scss']
})
export class CitizenBenefitsHistoryComponent implements OnInit {

  headers = ["Release ID", "Assistance Given", "Recipient Name", "Field Agent ID", "Date Released"]
  rows = [
    {
      "Release ID" : "1", 
      "Assistance Given" : "Medicine Assistance", 
      "Recipient Name" : "Juan Dela Cruz", 
      "Field Agent ID" : "000123",
      "Date Released" : "10-20-2020"
    },
    {
      "Release ID" : "2", 
      "Assistance Given" : "Hospital Bill Assistance", 
      "Recipient Name" : "Andrea Santos", 
      "Field Agent ID" : "000789",
      "Date Released" : "10-20-2020"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
