import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@one-medisyn/auth';

@Component({
  selector: 'one-medisyn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app1';

  service = inject(AuthService)
  getLogin() {
    this.service.login()
  }

  getLogout() {
    this.service.logout()
  }
  ngOnInit(): void {
    this.getLogin()
    this.getLogout()
  }


}
