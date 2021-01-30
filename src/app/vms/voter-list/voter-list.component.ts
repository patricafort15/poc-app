import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.scss']
})
export class VoterListComponent implements OnInit {

  constructor() { 
    console.log(this.voterList);
  }


  ngOnInit(): void {

    
  }

  public voterList: Array<VoterData> = [
    {
      id: 1001,
      status: 'Registered',
      name: 'Juan Dela Cruz',
      age: 35,
      gender: 'M',
      barangay: 'Talon Uno',
      rating: 3.9
    },
    {
      id: 1002,
      status: 'Unregistered',
      name: 'Ernesto Baluyot',
      age: 25,
      gender: 'M',
      barangay: 'Talon Uno',
      rating: 3.2
    },
    {
      id: 1087,
      status: 'Registered to another brgy.',
      name: 'Juanita Santos',
      age: 51,
      gender: 'F',
      barangay: 'Pilar',
      rating: 2.4
    },
    {
      id: 1024,
      status: 'Registered',
      name: 'Julian Molino',
      age: 31,
      gender: 'M',
      barangay: 'Talon Uno',
      rating: 3.9
    },
    {
      id: 1921,
      status: 'Unregistered',
      name: 'Conchita Villaluz',
      age: 43,
      gender: 'F',
      barangay: 'Pilar',
      rating: 4.1
    }
  ]

}

export interface VoterData {
  id:  number;
  status: string;
  name: string;
  age: number;
  gender: string;
  barangay: string;
  rating: number;  
}
