import { Component } from '@angular/core';
import { stringToNumber } from '@one-medisyn/functions';

@Component({
  selector: 'one-medisyn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app2';


  convert(value: string) {
    console.log(stringToNumber(value));
  }
}
