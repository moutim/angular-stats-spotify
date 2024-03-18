import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicsComponent } from './musics.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../shared/card/card.component';

@NgModule({
  declarations: [
    MusicsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class MusicsModule { }
