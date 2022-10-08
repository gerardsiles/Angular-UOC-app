import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from 'src/app/Song';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  @Input() song: Song;
  @Input() show: boolean = false;
  @Input() title: string;
  @Output() songClick: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // Emit the song clicked to the songs component
  onClick() {
    let title = this.song.title;
    console.log(title);
    this.songClick.emit(title);
  }
}
