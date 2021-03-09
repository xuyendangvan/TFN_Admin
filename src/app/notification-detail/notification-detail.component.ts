import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';



@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //require('chartist-plugin-legend');
    var dailySalesChart = new Chartist.Pie('#dashboardChard', {
      series: [30, 40],
      labels: ['Đã xem', 'Chưa xem']
    }, {
      donut: false,
      donutWidth: 20,
      startAngle: 0,
      total: 70,
      showLabel: true,
      
    });

    //this.startAnimationForLineChart(dailySalesChart);
  }

  startAnimationForLineChart(chart){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
            seq++;
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
    });

    seq = 0;
  };
}
