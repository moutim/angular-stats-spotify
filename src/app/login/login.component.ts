import { Component } from '@angular/core';
import variables from '../../../variables';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  scopesList = [
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

  redirect: boolean = false;

  constructor() {
    const redirectURL = `https://accounts.spotify.com/authorize?client_id=${variables.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(variables.REACT_APP_REDIRECT_URL)}&scope=${encodeURIComponent(this.scopesList.join(' '))}`;

    window.location.href = redirectURL;
  }

  ngOnInit() {
    if (this.redirect) {
      console.log('1111');

    } else {

      this.redirect = true;
    }
  }
}
