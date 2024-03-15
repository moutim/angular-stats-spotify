import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import variables from '../../../variables.example';

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
    'user-top-read',
    'user-read-private',
    'user-read-email',
    'user-read-recently-played',
    'playlist-read-collaborative',
    'playlist-read-private',
    'playlist-modify-private',
    'playlist-modify-public'
  ];

  redirectURL: string = '';

  redirect: boolean = false;

  constructor() {
    this.redirectURL = `https://accounts.spotify.com/authorize?client_id=${variables.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(variables.REACT_APP_REDIRECT_URL)}&scope=${encodeURIComponent(this.scopesList.join(' '))}`;
  }
}
