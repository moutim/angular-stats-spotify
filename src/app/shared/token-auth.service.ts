import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthService {
  token: string = '';

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

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.redirectURL = `https://accounts.spotify.com/authorize?client_id=${environment.CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(environment.REDIRECT_URL)}&scope=${encodeURIComponent(this.scopesList.join(' '))}`;
  }

  getToken(code: string) {
    const client_id = environment.CLIENT_ID;
    const client_secret = environment.CLIENT_SECRET;
    const encoded = btoa(client_id + ':' + client_secret);

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + encoded,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const params = new URLSearchParams({
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': environment.REDIRECT_URL,
      'client_id': environment.CLIENT_ID,
      'client_secret': environment.CLIENT_SECRET
    });

    const url = 'https://accounts.spotify.com/api/token';

    return this.http.post(url, params, { headers: headers });
  }
}
