import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-voter-mgmt-dashboard',
  templateUrl: './voter-mgmt-dashboard.component.html',
  styleUrls: ['./voter-mgmt-dashboard.component.scss']
})
export class VoterMgmtDashboardComponent implements OnInit {

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
          text: 'Total Registered Voters'
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
          text: 'Projected Supporters for Next Campaign'
        }
      }
    });

    var ctx = document.getElementById('lesalesChart');
    var lesalesChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1', '2', '3', '4', '5', '6'],
          datasets: [{
            label: 'Supporters',
            data: [12, 19, 3, 17, 6, 3, 7],
            backgroundColor: "rgb(41, 93, 198, 0.5)"
          }, {
            label: 'Non-supporters',
            data: [2, 29, 5, 5, 2, 3, 10],
            backgroundColor: "rgb(243, 61, 61, 0.5)"
          },{
            label: 'Total Voters',
            data: [12, 59, 15, 25, 12, 13, 20],
            backgroundColor: "rgb(32, 192, 79, 0.5)"
          }
        ]
        }
      });
  }

}
