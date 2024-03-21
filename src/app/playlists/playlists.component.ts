import { Component } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import ICreatePlaylist from '../interfaces/ICreatePlaylist';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrl: './playlists.component.css'
})
export class PlaylistsComponent {
  timeRange: string = 'medium';
  musicsQuantity: string = '50';
  musics: string[] = [];
  playlistUUID: string = '';
  iframeSrc: string = '';

  constructor(
    private userDataService: UserDataService
  ) {}

  changeTimeRange(timeRange: string) {
    this.timeRange = timeRange;
  }

  changeMusicQuantity(quantity: string) {
    this.musicsQuantity = quantity;
  }

  getMusics(limit: string) {
    if (this.musics.length > 0) this.musics = [];

    if (limit == '100') {
      this.userDataService.getMostListenedMusics(this.timeRange, '50').subscribe({
        next: (result: any) => {
          result.items.forEach((item: any) => {
            this.musics.push(item.uri)
          });
        }
      });

      this.userDataService.getMostListenedMusics(this.timeRange, '50', '50').subscribe({
        next: (result: any) => {
          result.items.forEach((item: any) => {
            this.musics.push(item.uri)
          });
        }
      });
    } else {
      this.userDataService.getMostListenedMusics(this.timeRange, limit).subscribe({
        next: (result: any) => {
          result.items.forEach((item: any) => {
            this.musics.push(item.uri)
          });
        }
      });
    }
  }

  createPlaylist() {
    let userId: string = 'moutimdibre01';
    let period: string = '';

    if (this.timeRange == 'medium') period = 'Seis meses'
    else if (this.timeRange == 'short') period = 'Um mês'
    else period = 'Desde o início';

    this.userDataService.createPlaylist(userId, this.musicsQuantity, period).subscribe({
      next: (result: any) => this.playlistUUID = result.id
    });
  }

  addMusicsToPlaylist() {
    this.userDataService.AddMusicsToPlaylist(this.playlistUUID, this.musics).subscribe({
      next: (result: any) => {
        console.log(result);
      }
    })
  }

  async generatePlaylist() {
    this.getMusics(this.musicsQuantity);

    setTimeout(() => {
      this.createPlaylist();
    }, 1000);

    setTimeout(() => {
      this.addMusicsToPlaylist();
      this.iframeSrc = `https://open.spotify.com/embed/playlist/${this.playlistUUID}?utm_source=generator`;
      console.log(this.iframeSrc);

    }, 2000);
  }

  ngOnInit() {
    this.userDataService.checkTokenInStorage();
  }
}
