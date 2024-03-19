import { Component } from '@angular/core';
import { TokenAuthService } from '../shared/token-auth.service';
import { UserDataService } from '../shared/user-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  userLogged: boolean = false;

  redirectURL: string = '';

  constructor(
    private tokenService: TokenAuthService,
    // private userDataService: UserDataService
  ) {
  }

  checkIfUserLogged() {
    const token: string | null = localStorage.getItem('token');

    if (token) {
      this.userLogged = true;

    }
  }


  ngOnInit() {
    this.redirectURL = this.tokenService.redirectURL;

    this.checkIfUserLogged();
  }
}
