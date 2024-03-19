import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import variables from '../../../variables';
import { TokenAuthService } from '../shared/token-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, AppRoutingModule, RouterModule],
})
export class NavbarComponent {
  scopesList: string[] = [
    'user-top-read',
    'user-read-recently-played',
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-read-private',
    'user-read-email',
    'playlist-read-collaborative',
    'playlist-read-private',
    'playlist-modify-private',
    'playlist-modify-public'
  ];

  redirectURL: string = '';

  constructor(private tokenService: TokenAuthService) { }

  ngOnInit() {
    this.redirectURL = this.tokenService.redirectURL;
  }
}
