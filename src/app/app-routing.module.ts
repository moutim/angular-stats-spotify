import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistsComponent } from './artists/artists.component';
import { MusicsComponent } from './musics/musics.component';
import { PlaylistsComponent } from './playlists/playlists.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'artists',
    component: ArtistsComponent
  },
  {
    path: 'musics',
    component: MusicsComponent
  },
  {
    path: 'playlists',
    component: PlaylistsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
