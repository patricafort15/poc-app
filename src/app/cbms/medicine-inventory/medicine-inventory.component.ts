import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-inventory',
  templateUrl: './medicine-inventory.component.html',
  styleUrls: ['./medicine-inventory.component.scss']
})
export class MedicineInventoryComponent implements OnInit {

  headers = ["Med. ID", "Name", "Category", "Brand Name", "Expiry Date"]
  rows = [
    {
      "Med. ID": "0000015", 
      "Name": "Biogesic", 
      "Category": "Paracetamol", 
      "Brand Name": "Unilab", 
      "Expiry Date": "10-10-2023"
    },
    {
      "Med. ID": "0000204", 
      "Name": "Fern-C", 
      "Category": "Multivitamins", 
      "Brand Name": "Fern", 
      "Expiry Date": "01-10-2022"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
