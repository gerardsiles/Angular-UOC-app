import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showSongInfo: boolean = false;
  private subject = new Subject<any>();
  private title: string;

  constructor() {}

  // Method to toggle show song information
  toggleShowSong(title: string): void {
    // We change the value of show info to the opposit
    this.showSongInfo = !this.showSongInfo;
    // Get the title of the song
    this.title = title;
    // Return the value
    this.subject.next(this.showSongInfo);
  }

  // Method to trigger the toggleShowSong
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
