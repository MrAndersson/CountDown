import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { PropertyRead } from '@angular/compiler';

@Component({
  selector: 'main-queue',
  templateUrl: './main-queue.component.html',
  styleUrls: ['./main-queue.component.css']
})
export class MainQueueComponent implements OnInit {

  @Input() queue: Array<Object>;

  arr: Array<Object> = [];

  days: string;
  hours: string;
  minutes: string;
  seconds: string;

  timer: any;

  ngOnInit() {
    if(this.queue.length > 0) {
      // this.timer = moment(this.queue[0]['date']);
      this.arr = this.queue.slice(-this.queue.length, 3);
      this.arr = this.arr.map(e => {
        e['timer'] = moment(e['date']);
        e['date'] = moment(e['date']).format('YYYY MMMM dddd HH:mm:SS');
        e['days'] = 0;
        e['hours'] = 0;
        e['minutes'] = 0;
        e['seconds'] = 0;

        return e;
      });
  
      this.arr.map(e => this.countdown(e));
    }

    console.log('Main Queue', this);
  }

  countdown(obj): void {
    setInterval(() => {
      const diff = moment(obj['timer'].diff(moment(new Date())));

      obj['days'] = diff.add('s', 1).format('DD');
      obj['hours'] = diff.add('s', 1).format('HH');
      obj['minutes'] = diff.add('s', 1).format('mm');
      obj['seconds'] = diff.add('s', 1).format('ss');

    }, 1000);
  }
}
