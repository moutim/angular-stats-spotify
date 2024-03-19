import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenAuthService } from './token-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  host: string = 'https://api.spotify.com';

  headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer ' + this.tokenService.token
  });

  constructor(
    private http: HttpClient,
    private tokenService: TokenAuthService
  ) { }

  getMostListenedMusics(timeRange: string) {
    return this.http.get(
      `${this.host}/v1/me/top/tracks?time_range=${timeRange}_term&limit=50`,
      { headers: this.headers }
    );
  }
}
