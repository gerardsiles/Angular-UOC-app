import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/Song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  @Input() song!: Song;

  constructor() {}

  ngOnInit(): void {}
}