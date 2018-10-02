import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Date: Date = new Date;
  /**
   * Should get the amount of seconds from current day until the event
   * FORMAT: YYYY/MM/DD HH:MM:SS
   */
  timer: number = 1000;
  display: string = `${this.getHours()} : ${this.getMinutes()} : ${this.getSeconds()}`;

  constructor() { }

  ngOnInit() {
    this.countdown();
  }

  getSecondsUntilEvent() {
    const date = new Date();
    // const eventDate = // Will be read from JSON file
  }

  getHours() {
    return this.timer / 3600 | 0
  }

  getMinutes() {
    return this.timer/60 | 0;
  }

  getSeconds() {
    return this.timer%60 | 0;
  }

  countdown(): void {
    setInterval(() => {
      if(this.timer === 0) {
        return;
      }
      this.timer   = this.timer - 1;
      this.display = `${this.getHours()} : ${this.getMinutes()} : ${this.getSeconds()}`;
    }, 1000);
}

}
