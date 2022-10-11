import { Component, Output } from '@angular/core';
import { Song } from './Song';
import { SONGS } from './dummyData';

import { SongService } from './services/song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-UOC-app';
}
