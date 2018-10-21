import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'side-queue',
  templateUrl: './side-queue.component.html',
  styleUrls: ['./side-queue.component.less']
})
export class SideQueueComponent implements OnInit {

  @Input() queue: Array<Object>;

  titleText: String;

  start: number;
  end: number;

  ngOnInit() {
    const year = moment(new Date()).format('YYYY');
    this.titleText = `Kommande Event ${year}`;

    this.start = -this.queue.length;
    this.end = 3

    console.log('Side Queue', this);
  }

}
