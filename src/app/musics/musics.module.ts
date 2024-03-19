import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicsComponent } from './musics.component';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from '../shared/card/card.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MusicsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule
  ]
})
export class MusicsModule { }
