import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'side-queue',
  templateUrl: './side-queue.component.html',
  styleUrls: ['./side-queue.component.css']
})
export class SideQueueComponent implements OnInit {

  @Input() queue: Array<Object>;

  year: any;
  start: number;
  end: number;

  ngOnInit() {
    this.year = moment(new Date()).format('YYYY');

    this.start = -this.queue.length;
    this.end = 3

    console.log('Side Queue', this);
  }

}
