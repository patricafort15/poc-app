import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizen-registration',
  templateUrl: './citizen-registration.component.html',
  styleUrls: ['./citizen-registration.component.scss']
})
export class CitizenRegistrationComponent implements OnInit {

  headers = ["ID", "Name", "Age", "Gender", "City", "Status"]
  rows = [
    {
      "ID" : "1",
      "Name" : "Juan Dela Cruz",
      "Age" : "21",
      "Gender" : "Male",
      "City" : "Quezon City",
      "Status": "Active"
    },
    {
      "ID" : "2",
      "Name" : "Andrea Santos",
      "Age" : "25",
      "Gender" : "Female",
      "City" : "Quezon City",
      "Status": "Active"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
