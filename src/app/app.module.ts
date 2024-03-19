import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './navbar/navbar.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginModule } from './login/login.module';
import { ArtistsModule } from './artists/artists.module';
import { MusicsModule } from './musics/musics.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { HttpClientModule } from '@angular/common/http';
import { TokenAuthService } from './shared/token-auth.service';
import { MatCardModule } from '@angular/material/card';
import { DialogElementsExample } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    NavbarModule,
    LoginModule,
    ArtistsModule,
    MusicsModule,
    PlaylistsModule,
    MatDialogModule,
    DialogElementsExample
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    TokenAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
