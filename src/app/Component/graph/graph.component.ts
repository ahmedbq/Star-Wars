import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  @Input() graphData = new MatTableDataSource();

  namesX: string[];
  heightsY: number[];
  massesY: number[];
  chart: any;

  nameKey = 'name';
  heightKey = 'height';
  massKey = 'mass';

  ngOnInit() {
    // TODO: data dissappears

    console.log(this.graphData);
    console.log(this.graphData.data);


    // this.graphData.data.map(m => m[name]);

    // this.namesX = this.graphData.data.map(item => item.name.toString());
    // this.heightsY = this.graphData.data.map(item => item[this.heightKey]);
    // this.massesY = this.graphData.data.map(item => item[this.massKey]);
    // console.log(this.namesX);
    // console.log(this.heightsY);
    // console.log(this.massesY);

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
