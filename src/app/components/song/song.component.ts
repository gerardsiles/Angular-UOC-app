import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Song } from 'src/app/Song';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css'],
})
export class SongComponent implements OnInit {
  @Input() song: Song;
  @Output() songTitle: Song;
  @Input() show: boolean = false;
  @Input() title: string;
  @Output() songClick: EventEmitter<string> = new EventEmitter();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  // Emit the song clicked to the songs component
  onClick() {
    let title = this.song.title;
    console.log(title);
    this.songClick.emit(title);
  }
}
