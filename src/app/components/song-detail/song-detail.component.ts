import { Component, OnInit } from '@angular/core';
import { SONGS } from '../../dummyData';
import { Song } from 'src/app/Song';
import { SongService } from '../../services/song.service';

// listen to changes in the router
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css'],
})
export class SongDetailComponent implements OnInit {
  songs: Song[] = SONGS;
  song$: any;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) {}

  ngOnInit() {
    this.song$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const name = params.get('name');
        console.log(name);
        let s = this.songService.getSong(name);
        console.log(s);
        return s;
      })
    );
  }
}
