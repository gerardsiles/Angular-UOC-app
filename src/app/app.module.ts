import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './components/song/song.component';
import { SongsComponent } from './components/songs/songs.component';
import { HomeComponent } from './components/home/home.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';
import { SearchComponent } from './components/search/search.component';
import { PlayerComponent } from './components/player/player.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    SongsComponent,
    HomeComponent,
    SongDetailComponent,
    SearchComponent,
    PlayerComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
