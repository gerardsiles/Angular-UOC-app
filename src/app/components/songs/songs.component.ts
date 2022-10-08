import { Component, Input, OnInit, Output } from '@angular/core';
import { Song } from '../../Song';
import { SONGS } from '../../dummyData';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
})
export class SongsComponent implements OnInit {
  songs: Song[] = SONGS;
  showSongInfo: boolean = false;
  subscription: Subscription;
  @Output() title: string;

  // In order to use a service we have to pass it to the constructor
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showSongInfo = value));
  }

  ngOnInit(): void {}

  // Toggle the show song info
  toggleShowSong(title: string) {
    this.title = title;
    this.uiService.toggleShowSong(title);
  }
}
