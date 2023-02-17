import { Component, OnInit } from '@angular/core';
// import { Chart,registerables } from 'chart.js';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
constructor() { }
//  chart1 :any;
  ngOnInit(): void {
    // this.chart1=document.getElementById('chart1');
    // Chart.register(...registerables);
    // this.chart1fun();
    
  }
  // chart1fun(){
  //  new Chart(this.chart1,{
  //   type: 'bar',
  // data: {
  //   labels:["january","february","march","april","may","june","july"],
  //   datasets:[{
  //     data:[30,20,40,50,30,56,23],
  //   }],
    
  // },
  // options: {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Chart.js Line Chart'
  //     }
  //   }
  // },
  //  })
  // }

  
 

}
