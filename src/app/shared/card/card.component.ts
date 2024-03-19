import { Component, Input } from '@angular/core';
import IMusicInfo from '../../interfaces/IMusicInfo';

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
}
