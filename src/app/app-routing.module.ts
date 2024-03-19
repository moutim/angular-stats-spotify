import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArtistsComponent } from './artists/artists.component';
import { MusicsComponent } from './musics/musics.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'artists',
    component: ArtistsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'musics',
    component: MusicsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
