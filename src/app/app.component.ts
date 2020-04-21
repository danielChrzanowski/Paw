import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Paw';

  constructor(private router: Router) { }

  pierwsza() {
    this.router.navigate(["/pierwsza"]);
  }

  druga() {
    this.router.navigate(["/druga"]);
  }

 showUsers() {
    this.router.navigate(["/showUsers"]);
  }

  createUser() {
    this.router.navigate(["/createUser"]);
  }


}
