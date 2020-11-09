import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var cty = document.getElementById('mypieChart');
    var myPieChart = new Chart(cty, {
      type: 'pie',
      data: {
        labels: ["District 1", "District 2", "District 3", "District 4","District 5", "District 6"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9", "#008641", "#ce171f"],
          data: [15000,14500,20000,19500,25423,23560]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Total Attendance in All Districts for October'
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
            label: "District 1",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [13654,14000,5120,4578,4000,3456,5541,6450,12789,14500],
            label: "District 2",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [19875,18788,17900,8560,4256,3126,3984,7894,16457,20000],
            label: "District 3",
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [17423,17984,13456,9050,3215,3100,7894,13789,16023,19500],
            label: "District 4",
            borderColor: "#e8c3b9",
            fill: false
          },
          { 
            data: [23456,21450,18500,15420,7800,4560,9563,13003,22455,25423],
            label: "District 5",
            borderColor: "#008641",
            fill: false
          },
          { 
            data: [20450,18450,12700,9350,4105,4560,8796,14236,19740,23560],
            label: "District 6",
            borderColor: "#ce171f",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Total Monthly Attendance in All Districts for 2020'
        }
      }
    });
  }

}
