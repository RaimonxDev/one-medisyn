import { Component, OnInit } from '@angular/core';
import { AuthService } from '@one-medisyn/auth';

@Component({
  selector: 'one-medisyn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'agenda';

  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    this.auth.login('login desde agenda');
  }
}
