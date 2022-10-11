import { Injectable } from '@angular/core';
import { Song } from '../Song';
import { SONGS } from '../dummyData';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  constructor(private readonly _http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    const songs = of(SONGS);
    return songs;
  }
  getSong(title: string | null): Observable<Song[]> {
    return of(SONGS.filter((song) => song.title === title));
  }
}
