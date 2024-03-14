import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import variables from '../../../variables';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthService {
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getAcessToken() {
    const acessCode = this.route.snapshot.queryParams['code']; // Ajuste para acessar 'code' diretamente


    const body = new HttpParams()
    .set('code', acessCode)
    .set('redirect_uri', variables.REACT_APP_REDIRECT_URL)
    .set('grant_type', 'authorization_code');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${variables.REACT_APP_CLIENT_ID}:${variables.REACT_APP_CLIENT_SECRET}`)
    });

    // const body = new HttpParams()
    //   .set('grant_type', 'authorization_code')
    //   .set('code', acessCode)
    //   .set('redirect_uri', variables.REACT_APP_REDIRECT_URL)
    //   .set('client_id', variables.REACT_APP_CLIENT_ID)
    //   .set('client_secret', variables.REACT_APP_CLIENT_SECRET);

    return this.http.post('https://accounts.spotify.com/api/token', body.toString(), { headers });
  }

  getUserInfo() {
    return this.http
  }
}
