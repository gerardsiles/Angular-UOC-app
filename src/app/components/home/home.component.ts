import { Component, Input, OnInit, Output } from '@angular/core';
import { Song } from '../../Song';
import { SONGS } from '../../dummyData';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  songs: Song[] = SONGS;

  constructor() {}

  ngOnInit(): void {}
}
