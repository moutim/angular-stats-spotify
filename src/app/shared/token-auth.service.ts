import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
const { CLIENT_ID, REDIRECT_URL, CLIENT_SECRET } = process.env;
import { ActivatedRoute } from '@angular/router';

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
    const redirect_url = REDIRECT_URL ? REDIRECT_URL : '';
    const client_id = CLIENT_ID ? CLIENT_ID : '';

    this.redirectURL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_url)}&scope=${encodeURIComponent(this.scopesList.join(' '))}`;
  }

  getToken(code: string) {
    const client_id = CLIENT_ID ? CLIENT_ID : '';
    const client_secret = CLIENT_SECRET ? CLIENT_SECRET : '';
    const redirect_url = REDIRECT_URL ? REDIRECT_URL : '';
    const encoded = btoa(client_id + ':' + client_secret);

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + encoded,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const params = new URLSearchParams({
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': redirect_url,
      'client_id': client_id,
      'client_secret': client_secret
    });

    const url = 'https://accounts.spotify.com/api/token';

    return this.http.post(url, params, { headers: headers });
  }
}
