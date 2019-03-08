import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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
    // console.log('Main Queue', this);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.queueUpdate();
  }

  queueUpdate(): void {
    if(this.queue == undefined) {
      return;
    }

    this.arr = this.queue.slice(-this.queue.length, 3);
    this.arr = this.arr.map(e => {
      let date = moment(e['date']);

      e['timer'] = date;
      e['date']  = date
                  .format('dddd D MMM YYYY HH:mm')
                  .split(' ')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');

      e['days']    = 0;
      e['hours']   = 0;
      e['minutes'] = 0;
      e['seconds'] = 0;

      return e;
    });
  
    this.arr.map(e => this.countdown(e));
  }

  countdown(obj): void {
    let today = new Date();
    setInterval(() => {
      const diff = moment(obj['timer'].diff(moment(new Date())));
      
      if(obj['timer'].isBefore(today)) {
        obj['days']    = '00';
        obj['hours']   = '00';
        obj['minutes'] = '00';
        obj['seconds'] = '00';
      } 
      else {
        let days = diff.add('s').format('DDD');
        days = parseInt(days) > 99 ? days : parseInt(days) === 1 ? '00' : diff.add('s').format('DD');

        obj['days']    = days;
        obj['hours']   = diff.add('s').format('HH');
        obj['minutes'] = diff.add('s').format('mm');
        obj['seconds'] = diff.add('s').format('ss');
      }
    }, 1000);
  }
}
