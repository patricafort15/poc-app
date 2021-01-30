import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-voter-report',
  templateUrl: './voter-report.component.html',
  styleUrls: ['./voter-report.component.scss']
})
export class VoterReportComponent implements OnInit {

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
          data: [4,3.8,4.1,2.9,3.5,4]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Average Rating per Area'
        }
      }
    });

    var cta = document.getElementById('agePieChart');
    var agePieChart = new Chart(cta, {
      type: 'pie',
      data: {
        labels: ["16-20", "21-25", "26-30", "31-35","36-40", "41-45", "46-50", "51-55", "60 and above"],
        datasets: [{
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9", "#008641", "#ce171f", "#1c4966", "#fab500"],
          data: [2,3.2,3.4,4,3.9,3.75,4.2,3.2,4.3]
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Average Rating per Age Group'
        }
      }
    });

    var ctz = document.getElementById('mylineChart');
    var myLineChart = new Chart(ctz, {
      type: 'line',
      data: {
        labels: ["District 1", "District 2", "District 3", "District 4", "District 5", "District 6", "District 7", "District 8", "District 9", "District 10"],
        datasets: [{ 
            data: [4.5,2.75,2.1,4.5,5,3.6,3.6,2.7,4.2,3.52],
            label: "Registered",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [4,3.5,3.2,2.5,4.1,3.5,3.6,2.9,5,4.2],
            label: "Unregistered",
            borderColor: "#8e5ea2",
            fill: false
          }]
      },
      options: {
        title: {
          display: true,
          text: 'Rating per Location'
        }
      }
    });

    var ctx = document.getElementById('mygLineChart');
    var mygLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["District 1", "District 2", "District 3", "District 4", "District 5", "District 6", "District 7", "District 8", "District 9", "District 10"],
        datasets: [{ 
            data: [4.5,2.75,2.1,4.5,5,3.6,3.6,2.7,4.2,3.52],
            label: "Female",
            borderColor: "#e8c3b9",
            fill: false
          }, { 
            data: [4,3.5,3.2,2.5,4.1,3.5,3.6,2.9,5,4.2],
            label: "Male",
            borderColor: "#8e5ea2",
            fill: false
          }]
      },
      options: {
        title: {
          display: true,
          text: 'Rating based on Gender'
        }
      }
    });
  }

}
