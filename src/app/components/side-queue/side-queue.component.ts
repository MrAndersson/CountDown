import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'side-queue',
  templateUrl: './side-queue.component.html',
  styleUrls: ['./side-queue.component.less']
})
export class SideQueueComponent implements OnInit, OnChanges {

  @Input() queue: Array<Object>;
  @Input() size: string;

  titleText: String;

  start: number;
  end: number;

  ngOnInit() {
    this.queueUpdate();
    console.log('Side Queue', this);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.queueUpdate();
  }

  queueUpdate(): void {
    if(this.queue == undefined) {
      return;
    }
    // const year = moment(new Date()).format('YYYY');
    // this.titleText = `Kommande Event ${year}`;
    this.titleText = `Kommande Event`;

    this.start = -this.queue.length;
    this.end = 3
  }

}
