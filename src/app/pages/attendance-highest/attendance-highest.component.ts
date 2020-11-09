import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-attendance-highest',
  templateUrl: './attendance-highest.component.html',
  styleUrls: ['./attendance-highest.component.scss']
})
export class AttendanceHighestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var cty = document.getElementById('mypieChart');
    var myPieChart = new Chart(cty, {
      type: 'pie',
    data: {
      labels: ["15-24", "25-34", "35-44", "45-54", "55-64", "65 and above"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9", "#008641", "#ce171f"],
        data: [5000,25000,29450,12000,6401,8975]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Total Attendance per Age Group for October 2020'
      }
    }
    });

    var ctz = document.getElementById('mylineChart');
    var myLineChart = new Chart(ctz, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
        datasets: [{ 
            data: [9500,11256,5000,3000,3500,4000,4521,6897,8978,5000],
            label: "15-24", 
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [13654,14000,5120,4578,4000,3456,5541,6450,12789,25000],
            label: "25-34", 
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [19875,18788,17900,8560,4256,3126,3984,7894,16457,29450],
            label: "35-44", 
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [17423,17984,13456,9050,3215,3100,7894,13789,16023,12000],
            label: "45-54", 
            borderColor: "#e8c3b9",
            fill: false
          },
          { 
            data: [17423,17984,13456,9050,3215,3100,7894,13789,16023,6401],
            label: "55-64",
            borderColor: "#008641",
            fill: false
          },
          { 
            data: [17423,17984,13456,9050,3215,3100,7894,13789,16023,8975],
            label: "65 and above",
            borderColor: "#ce171f",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Total Attendees per Age Group for 2020'
        }
      }
    });

    var ctz = document.getElementById('monthlylineChart');
    var myLineChart = new Chart(ctz, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
        datasets: [{ 
            data: [9500,11256,5000,3000,3500,4000,4521,6897,8978,5000],
            label: "Bambang", 
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [13654,14000,5120,4578,4000,3456,5541,6450,12789,25000],
            label: "Baseco", 
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [19875,18788,17900,8560,4256,3126,3984,7894,16457,29450],
            label: "Quiapo", 
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [17423,17984,13456,9050,3215,3100,7894,13789,16023,12000],
            label: "Tondo", 
            borderColor: "#e8c3b9",
            fill: false
          },
          { 
            data: [17423,17984,13456,9050,3215,3100,7894,13789,16023,6401],
            label: "Sampaloc",
            borderColor: "#008641",
            fill: false
          },
          { 
            data: [17423,17984,13456,9050,3215,3100,7894,13789,16023,8975],
            label: "Pandacan",
            borderColor: "#ce171f",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Total Attendees per Age Group for 2020'
        }
      }
    });

    var ctz = document.getElementById('weeklylineChart');
    var myLineChart = new Chart(ctz, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [{ 
            data: [9500,11256,8978,5000],
            label: "Bambang", 
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [13654,14000,12789,25000],
            label: "Baseco", 
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [19875,18788,16457,29450],
            label: "Quiapo", 
            borderColor: "#3cba9f",
            fill: false
          }, { 
            data: [17423,17984,16023,12000],
            label: "Tondo", 
            borderColor: "#e8c3b9",
            fill: false
          },
          { 
            data: [17423,17984,16023,6401],
            label: "Sampaloc",
            borderColor: "#008641",
            fill: false
          },
          { 
            data: [17423,17984,16023,8975],
            label: "Pandacan",
            borderColor: "#ce171f",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Total Attendees per Age Group for 2020'
        }
      }
    });
  }

}
