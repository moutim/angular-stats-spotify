import { Component } from '@angular/core';
import { TokenAuthService } from '../shared/token-auth.service';
import { UserDataService } from '../shared/user-data.service';
import IMusicInfo from '../interfaces/IMusicInfo';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrl: './musics.component.css'
})
export class MusicsComponent {
  musics: IMusicInfo[] = [];

  timeRange: string = 'medium';

  constructor(
    private dataService: UserDataService
  ) {}

  getMusics() {
    if (this.musics.length > 0) this.musics = [];

    this.dataService.getMostListenedMusics(this.timeRange).subscribe({
      next: (result: any) => {
        result.items.forEach((obj: any, index: number) => {
          const musicInfo: IMusicInfo = {
            id: index + 1,
            artist: obj.artists[0].name,
            music: obj.name,
            srcImg: obj.album.images[1].url
          };

          this.musics?.push(musicInfo);
        });
        console.log(result);

        console.log(this.musics);
      }
    });
  }

  ngOnInit() {
    this.getMusics();
  }

  changeTimeRange(timeRange: string) {
    this.timeRange = timeRange;
    this.getMusics();
  }
}
