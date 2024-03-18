import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import variables from '../../../variables';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthService {
  token: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getToken(code: string) {
    // const params = 'grant_type=client_credentials';
    const client_id = variables.CLIENT_ID;
    const client_secret = variables.CLIENT_SECRET;
    const encoded = btoa(client_id + ':' + client_secret);

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + encoded,
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const params = new URLSearchParams({
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': variables.REDIRECT_URL,
      'client_id': variables.CLIENT_ID,
      'client_secret': variables.CLIENT_SECRET
    });

    const url = 'https://accounts.spotify.com/api/token';

    return this.http.post(url, params, { headers: headers });
  }
}
