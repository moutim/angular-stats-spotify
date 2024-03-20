import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenAuthService } from './token-auth.service';
import { DialogService } from '../dialog/dialog.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  host: string = 'https://api.spotify.com';

  token: string = '';

  constructor(
    private http: HttpClient,
    private tokenService: TokenAuthService,
    private dialog: DialogService
  ) { }

  checkTokenInStorage() {
    const tokenStorage: string | null = localStorage.getItem('token');

    if (tokenStorage) {
      this.token = tokenStorage;
      return true;
    } else {
      this.dialog.openDialog();
      return false;
    }
  }

  mountHeaders() {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return headers;
  }

  getMostListenedMusics(timeRange: string) {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.get(
      `${this.host}/v1/me/top/tracks?time_range=${timeRange}_term&limit=50`,
      { headers: headers }
    );
  }

  getMostListenedArtists(timeRange: string) {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.get(
      `${this.host}/v1/me/top/artists?time_range=${timeRange}_term&limit=50`,
      { headers: headers }
    );
  }

  getUserInfo() {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.get(`${this.host}/v1/me`, { headers: headers });
  }
}
