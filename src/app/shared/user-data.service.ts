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
      'Authorization': 'Bearer ' + this.token,
      // 'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return headers;
  }

  getMostListenedMusics(timeRange: string, limit = '50', offset = '0') {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.get(
      `${this.host}/v1/me/top/tracks?time_range=${timeRange}_term&limit=${limit}&offset=${offset}`,
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

  createPlaylist(userId: string, quantityMusics: string, period: string) {
    const headers: HttpHeaders = this.mountHeaders();
    const date = new Date();
    const body = {
      name: `Top ${quantityMusics} músicas - ${period} - ${date.getMonth() + 1}/${date.getFullYear()}`,
      description: `Playlist criada em ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} com base nas suas músicas mais escutadas - Desenvolvido por Vitor Moutim - https://stats-spotify-repo.vercel.app/`,
      public: true
    };

    return this.http.post(
      `${this.host}/v1/users/${userId}/playlists`,
      body,
      { headers: headers }
    );
  }

  AddMusicsToPlaylist(playlistId: string, musicsId: string[]) {
    const headers: HttpHeaders = this.mountHeaders();
    const body = {
      uris: musicsId
    };

    return this.http.post(
      `${this.host}/v1/playlists/${playlistId}/tracks`,
      body,
      { headers: headers }
    )
  }

  getUserInfo() {
    const headers: HttpHeaders = this.mountHeaders();

    return this.http.get(`${this.host}/v1/me`, { headers: headers });
  }
}
