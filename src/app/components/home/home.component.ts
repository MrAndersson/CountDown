import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

moment.locale('sv')

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  year: any;
  days: string;
  queue: Array<any> = [
    {date: '2018-11-08 18:34:30', host: 'HOST', location: 'STOCK', name: 'SUPER COOL BRISTOL PARTY', info: 'Hej bristol 4 lyf, m8!'},
    {date: '2018-11-12 18:34:30', host: 'HOST', location: 'STOCK', name: 'SUPER COOL BRISTOL PARTY', fLink: 'https://www.facebook.com/viktor.g.andersson.3', info: 'Hej bristol 4 lyf, m8!'},
    {date: '2018-11-09 18:34:30', host: 'HOST', location: 'STOCK', name: 'SUPER COOL BRISTOL PARTY', fLink: 'https://www.facebook.com/viktor.g.andersson.3', info: 'Hej bristol 4 lyf, m8!'},
    {date: '2018-11-15 18:34:30', host: 'HOST', location: 'STOCK', name: 'SUPER COOL BRISTOL PARTY', fLink: 'https://www.facebook.com/viktor.g.andersson.3', info: 'Hej bristol 4 lyf, m8!'},
    {date: '2018-11-14 18:34:30', host: 'HOST', location: 'STOCK', name: 'SUPER COOL BRISTOL PARTY', fLink: 'https://www.facebook.com/viktor.g.andersson.3', info: 'Hej bristol 4 lyf, m8!'},
    {date: '2018-11-13 18:34:30', host: 'HOST', location: 'STOCK', name: 'SUPER COOL BRISTOL PARTY', fLink: 'https://www.facebook.com/viktor.g.andersson.3', info: 'Hej bristol 4 lyf, m8!'},
    {date: '2018-11-16 18:34:30', host: 'HOST', location: 'STOCK', name: 'SUPER COOL BRISTOL PARTY', info: 'Hej bristol 4 lyf, m8!'}
  ];

  ngOnInit() {
    this.queue = this.sort();

    console.log('Home', this)
  }

  sort() {
    return this.queue.sort((a, b) => moment(a.date).isBefore(moment(b.date)) ? -1 : 1);
  }
}
