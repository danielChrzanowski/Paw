import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Uzytkownik } from './models/user/uzytkownik/uzytkownik';
import { HttpClient } from '@angular/common/http';
import { UzytkownikServiceService } from './models/user/uzytkownik-service/uzytkownik-service.service';
import { EncryptionService } from './encryption/encryption.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Paw';

  uzytkownik: Uzytkownik;

  constructor(private http: HttpClient,
    private router: Router,
    private uzytkownikService: UzytkownikServiceService,
    private encryptionService: EncryptionService) {

    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    this.uzytkownik = null;

    // if (this.uzytkownik != null) {
    this.refreshUser();
    //}

  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    this.uzytkownik = null;

    this.home();
  }

  home() {
    this.router.navigate(["/home"]);
  }

  logIn() {
    this.router.navigate(["/log-in"]);
  }

  showOrders() {
    this.router.navigate(["/showOrders"]);
  }

  createUser() {
    this.router.navigate(["/createUser"]);
  }

  refreshUser() {
    if (sessionStorage.length > 0) {

      let value = this.encryptionService.decryptData(sessionStorage.getItem("userId"));
      console.log("wartosc: " + value);

      this.uzytkownikService.loggedUserById(value)
        .subscribe(
          data => {
            console.log(data);
            this.uzytkownik = data;
          },
          error => console.log(error));
    }
  }

}

window.onload = function () {
  //sessionStorage.removeItem('token');
  //sessionStorage.removeItem('userId');
  //this.uzytkownik = null;

  //window.location.href  = "https://localhost:4200";

  console.log("RELOADED");
}

