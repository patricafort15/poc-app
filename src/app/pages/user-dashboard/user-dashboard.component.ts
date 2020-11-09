import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  

  ngOnInit() {
    var cty = document.getElementById('mypieChart');
    var myPieChart = new Chart(cty, {
      type: 'pie',
    data: {
      labels: ["Bambang", "Baseco", "Quiapo", "Tondo"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
        data: [15000,14500,20000,19500]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Total Attendance in the District of Manila for October'
      }
    }
    });

    var ctz = document.getElementById('mylineChart');
    var myLineChart = new Chart(ctz, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
        datasets: [{ 
            data: [9500,11256,5000,3000,3500,4000,4521,6897,8978,15000],
            label: "Bambang",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [13654,14000,5120,4578,4000,3456,5541,6450,12789,14500],
            label: "Baseco",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [19875,18788,17900,8560,4256,3126,3984,7894,16457,20000],
            label: "Quiapo",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [17423,17984,13456,9050,3215,3100,7894,13789,16023,19500],
            label: "Tondo",
            borderColor: "#e8c3b9",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Total Monthly Attendance for 2020'
        }
      }
    });
  }

}
