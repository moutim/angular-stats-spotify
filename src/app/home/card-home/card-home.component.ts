import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.css'
})
export class CardHomeComponent {
  @Input() title: string = '';
  @Input() paragraph1: string = '';
  @Input() paragraph2: string = '';
}
