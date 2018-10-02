import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  queue: Array<any> = [{date: '2018-10-08 18:34:30', host: 'HOST', location: 'STOCK', name: 'SUPER COOL BRISTOL PARTY', fLink: 'https://www.facebook.com/viktor.g.andersson.3'}];

  timer: any;
  displayDate: any;
  displayHost: string;
  displayLocation: string;
  displayName: string;
  displayFacebookLink: string;

  ngOnInit() {
    this.timer = moment(this.queue[0].date);

    this.displayDate = moment(this.queue[0].date).format('YYYY/MM/DD HH:mm:ss');
    this.displayHost = this.queue[0].host;
    this.displayLocation = this.queue[0].location;
    this.displayName = this.queue[0].name;
    this.displayFacebookLink = this.queue[0].fLink;

    this.countdown();

    console.log('Home', this);
  }

  countdown(): void {
    setInterval(() => {
      const diff = moment(this.timer.diff(moment(new Date())));

      this.days = diff.add('s', 1).format('DD');
      this.hours = diff.add('s', 1).format('HH');
      this.minutes = diff.add('s', 1).format('mm');
      this.seconds = diff.add('s', 1).format('ss');

    }, 1000);
}

}
