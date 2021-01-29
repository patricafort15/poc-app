import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-assistance',
  templateUrl: './medicine-assistance.component.html',
  styleUrls: ['./medicine-assistance.component.scss']
})
export class MedicineAssistanceComponent implements OnInit {
  headers = ["Release ID", "Medicine Given", "Recipient Name", "Field Agent ID", "Date Released"]
  rows = [
    {
      "Release ID" : "1", 
      "Medicine Given" : "Medicine A", 
      "Recipient Name" : "Juan Dela Cruz", 
      "Field Agent ID" : "000123",
      "Date Released" : "10-20-2020"
    },
    {
      "Release ID" : "2", 
      "Medicine Given" : "Medicine X", 
      "Recipient Name" : "Andrea Santos", 
      "Field Agent ID" : "000789",
      "Date Released" : "10-20-2020"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
