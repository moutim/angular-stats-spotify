import { Component } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import IArtistInfo from '../interfaces/IArtistInfo';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent {
  timeRange: string = 'medium';
  artists: IArtistInfo[] = [];

  constructor(
    private userData: UserDataService
  ) {}

  getArtists() {
    this.userData.getMostListenedArtists(this.timeRange).subscribe({
      next: (result: any) => {
        console.log(result);

        result.items.forEach((artist: any, index: number) => {
          const info: IArtistInfo = {
            id: index + 1,
            artist: artist.name,
            genre: artist.genres[0],
            srcImg: artist.images.length ? artist.images[0].url : 'https://media.istockphoto.com/id/1500807425/pt/vetorial/image-not-found-icon-vector-design.jpg?s=612x612&w=0&k=20&c=5MzkyhRPAx0G3pl9-C7vLxPHcXxU4mOBay3d8Xkhdwg='
          }

          this.artists?.push(info);
        });
      }
    });
  }

  ngOnInit() {
    this.userData.checkTokenInStorage();
    this.getArtists();
  }

  changeTimeRange(timeRange: string) {
    this.timeRange = timeRange;
  }
}
