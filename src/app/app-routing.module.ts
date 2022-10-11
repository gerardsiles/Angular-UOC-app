import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SongsComponent } from './components/songs/songs.component';
import { SongDetailComponent } from './components/song-detail/song-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SongsComponent,
  },
  {
    path: 'songs',
    component: SongsComponent,
    children: [{ path: ':name', component: SongDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
