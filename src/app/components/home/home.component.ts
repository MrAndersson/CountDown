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

  year: any;
  days: string;
  queue: Array<any> = [];

  constructor(private http: HttpClient) {  }

  ngOnInit() {

    this.http.get('/assets/json/events.json').subscribe(e => {
      this.queue = e.filter(item => moment(item.date).isAfter(new Date()));
      this.queue = this.sort();
    });

    console.log('Home', this)
  }

  sort() {
    return this.queue.sort((a, b) => moment(a.date).isBefore(moment(b.date)) ? -1 : 1);
  }
}
