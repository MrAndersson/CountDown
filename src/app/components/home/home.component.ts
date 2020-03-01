import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';

moment.locale('sv')

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  ready: boolean;

  year: any;
  days: string;
  queue: any;

  constructor(public http: HttpClient) {
    this.ready = false;
  }

  ngOnInit() {
    // this.http.get<Array<any>>('/assets/json/events.json').subscribe(e => {
    this.http.get<Array<any>>('https://sheetsu.com/apis/v1.0su/2453f9630a26').subscribe(e => {
      if(e) {
        let curDate = moment(new Date());

        this.queue = e.filter((item, i) => {
          let date = moment(item['date']);

          if(date.isSame(curDate, 'day')) {
            let endTime = moment(curDate).endOf('day');
            let hours = Math.floor(moment.duration(endTime.diff(date)).asHours());

            date = date.add(hours, 'hour')
          }

          return date.isAfter(curDate);
        });

        this.queue = this.sort();
      }
    });

    // console.log('Home', this);
  }

  readyHome(bool) {
    this.ready = bool;
  }

  sort() {
    return this.queue.sort((a, b) => moment(a.date).isBefore(moment(b.date)) ? -1 : 1);
  }
}
