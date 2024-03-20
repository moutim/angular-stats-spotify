import { Component, Input } from '@angular/core';
import IMusicInfo from '../../interfaces/IMusicInfo';
import IArtistInfo from '../../interfaces/IArtistInfo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() musicInfo: IMusicInfo = {
    id: 0,
    artist: '',
    music: '',
    srcImg: ''
  };

  @Input() artistInfo: IArtistInfo = {
    id: 0,
    artist: '',
    genre: '',
    srcImg: ''
  };
}
