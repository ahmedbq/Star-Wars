import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { PeopleService } from '../../Service/people.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  key = 'results';
  dataSource = [];

  namesX: string[];
  heightsY: number[];
  massesY: number[];
  chart: any;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getAllPeople().subscribe(res => this.dataSource = res[this.key]);
    this.namesX = this.dataSource.map(item => item.name.toString());
    this.heightsY = this.dataSource.map(item => item.height);
    this.massesY = this.dataSource.map(item => item.mass);

    console.log("data size: " + this.dataSource.length);

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.namesX,
        datasets: [
          {
            label: 'Height',
            data: this.heightsY,
            backgroundColor: 'Aqua',
          },
          {
            label: 'Weight',
            data: this.massesY,
            backgroundColor: 'LightPink',
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Height & Weight'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Names'
            }
          }]
        }
      }
    });
  }

}
