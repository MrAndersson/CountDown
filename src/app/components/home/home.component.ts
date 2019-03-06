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

  main: boolean = false;

  year: any;
  days: string;
  queue: any;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    // this.http.get<Array<any>>('/assets/json/events.json').subscribe(e => {
    this.http.get<Array<any>>('https://sheetsu.com/apis/v1.0su/2453f9630a26').subscribe(e => {
      if(e) {
        this.queue = e.filter(item => moment(item['date']).isAfter(new Date()));
        this.queue = this.sort();
      }
      this.main = true;
    });

    // console.log('Home', this);
  }

  sort() {
    return this.queue.sort((a, b) => moment(a.date).isBefore(moment(b.date)) ? -1 : 1);
  }
}
