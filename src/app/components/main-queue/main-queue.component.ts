import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'main-queue',
  templateUrl: './main-queue.component.html',
  styleUrls: ['./main-queue.component.less']
})
export class MainQueueComponent implements OnInit, OnChanges {

  @Input() queue: Array<Object>;

  arr: Array<Object> = [];

  days: string;
  hours: string;
  minutes: string;
  seconds: string;

  timer: any;

  ngOnInit() {
    this.queueUpdate();
    console.log('Main Queue', this);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.queueUpdate();
  }

  queueUpdate(): void {
    this.arr = this.queue.slice(-this.queue.length, 3);
    this.arr = this.arr.map(e => {
      e['timer'] = moment(e['date']);
      e['date'] = moment(e['date'])
                  .format('dddd D MMMM YYYY HH:mm')
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
      e['days'] = 0;
      e['hours'] = 0;
      e['minutes'] = 0;
      e['seconds'] = 0;

      return e;
    });
  
    this.arr.map(e => this.countdown(e));
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
