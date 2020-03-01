import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'main-queue',
  templateUrl: './main-queue.component.html',
  styleUrls: ['./main-queue.component.less']
})
export class MainQueueComponent implements OnInit, OnChanges {

  @Input() queue: Array<Object>;
  @Output() readyMainQueue;


  arr: Array<Object> = [];

  days: string;
  hours: string;
  minutes: string;
  seconds: string;

  timer: any;

  constructor() {
    this.readyMainQueue = new EventEmitter();
  }

  ngOnInit() {
    this.queueUpdate();
    // console.log('Main Queue', this);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.queueUpdate();
  }

  queueUpdate(): void {
    if(this.queue == undefined) {
      this.readyMainQueue.emit(true);
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
    setInterval(() => {
      // let today = moment();
      // let diffF = moment(obj['timer'].diff(today)).unix();

      if(obj['timer'].isBefore(moment())) {
        obj['days']    = '00';
        obj['hours']   = '00';
        obj['minutes'] = '00';
        obj['seconds'] = '00';
      } 
      else {
        var event = moment(obj['timer']).unix();
        var today = moment().unix();
  
        var diffTime = moment.duration((event - today)*1000, 'milliseconds');
  
        var diffDays = moment(obj['timer'].diff(moment().startOf('day')));

        let days = diffDays.add('s').format('DDD');
        
        days = parseInt(days) > 11 ? days : diffDays.add('s').format('DD');

        var hours = moment.utc(diffTime.asMilliseconds()).format('HH');
        var mins  = moment.utc(diffTime.asMilliseconds()).format('mm');
        var secs  = moment.utc(diffTime.asMilliseconds()).format('ss');

        obj['days']    = days;
        obj['hours']   = hours;
        obj['minutes'] = mins;
        obj['seconds'] = secs;
      }
    }, 1000);

    this.readyMainQueue.emit(true);
  }
}