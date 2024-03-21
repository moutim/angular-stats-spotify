import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    FormsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PlaylistsModule { }
