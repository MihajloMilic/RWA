import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../state/video.model';
import { Store } from '@ngrx/store';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  private video$: Observable<Video>;
  private video: Video;

  constructor(private store: Store<{videos:{selectedVideo: Video}}>,public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.video$ = this.store.select(store => store.videos.selectedVideo);
    this.video$.subscribe(res => this.video = res);
  }
  videoURL() {
    console.log(this.video.video+'?ecver=2')
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.video.video+'?ecver=2');
  }

}
