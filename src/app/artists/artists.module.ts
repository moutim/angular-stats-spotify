import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { CardArtistComponent } from '../shared/card-artist/card-artist.component';



@NgModule({
  declarations: [
    ArtistsComponent,
    CardArtistComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule
  ]
})
export class ArtistsModule { }
