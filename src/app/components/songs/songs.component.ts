import { Component, OnInit } from '@angular/core';
import { Song } from '../../Song';
import { SONGS } from '../../dummyData';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
})
export class SongsComponent implements OnInit {
  songs: Song[] = SONGS;

  constructor() {}

  ngOnInit(): void {}
}
