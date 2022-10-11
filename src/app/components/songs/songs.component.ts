import { Component, Input, OnInit, Output } from '@angular/core';
import { Song } from '../../Song';
import { SONGS } from '../../dummyData';
import { UiService } from '../../services/ui.service';
import { Subscription, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css'],
})
export class SongsComponent implements OnInit {
  songs: Song[] = SONGS;

  @Output() title: string;

  // In order to use a service we have to pass it to the constructor
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
