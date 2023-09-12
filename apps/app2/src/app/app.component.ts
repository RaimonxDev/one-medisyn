import { Component, OnInit } from '@angular/core';
import { stringToNumber } from '@one-medisyn/functions';

@Component({
  selector: 'one-medisyn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app2';


  ngOnInit() {
    this.convertToNumber('123');
  }


  convertToNumber(value: string): number {
    console.log(stringToNumber(value));
    return stringToNumber(value);
  }
}
