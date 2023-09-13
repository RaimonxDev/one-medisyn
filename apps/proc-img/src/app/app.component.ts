import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@one-medisyn/auth';

@Component({
  selector: 'one-medisyn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  auth = inject(AuthService);
  ngOnInit(): void {
    this.auth.login('login desde procedimientos-imagenes');
  }
  title = 'procedimientos-imagenes';
}
