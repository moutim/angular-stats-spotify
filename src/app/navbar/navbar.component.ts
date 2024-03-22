import { Component } from '@angular/core';
import { TokenAuthService } from '../shared/token-auth.service';
import { UserDataService } from '../shared/user-data.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  userLogged: boolean = false;
  redirectURL: string = '';
  name: string = '';

  constructor(
    private tokenService: TokenAuthService,
    private route: Router,
    private userData: UserDataService
  ) { }

  getUserInfos() {
    this.userData.getUserInfo().subscribe({
      next: (result: any) => {
        this.name = result.display_name;
      }
    })
  }

  checkIfUserLogged() {
    const token: string| null = localStorage.getItem('token');
    const check = this.userData.checkTokenInStorage();

    if (check) {
      this.userLogged = true;
    }

    return 'ttt'
  }

  logout() {
    localStorage.removeItem('token');
    this.userLogged = false;
    this.route.navigate(['/']);
  }

  ngOnInit() {
    this.redirectURL = this.tokenService.redirectURL;

    this.route.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.route.url !== '/') {
        setTimeout(() => {
          this.checkIfUserLogged();
          this.getUserInfos();
        }, 500);
      }
    });
  }
}
