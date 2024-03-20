import { Component, Input } from '@angular/core';
import IArtistInfo from '../../interfaces/IArtistInfo';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrl: './card-artist.component.css'
})
export class CardArtistComponent {
  @Input() artistInfo: IArtistInfo = {
    id: 0,
    artist: '',
    genre: '',
    srcImg: ''
  };
}
