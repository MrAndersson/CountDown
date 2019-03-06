import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.less']
})
export class TitleBarComponent implements OnInit {

  @Input() text = '';
  @Input() arrowLeft = '';
  @Input() arrowRight = '';

  constructor() { }

  ngOnInit() {  }

}
