import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Video } from '../../state/video.model';

@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  @Input() video: Video;

  @Output() selectVideo: EventEmitter<Video>;
  
  constructor(private store: Store<{selectedVideo: Video}>) { 
    this.selectVideo = new EventEmitter();
  }

  ngOnInit() {
  }

  public onSelectVideo(): void {
    this.selectVideo.emit(this.video);
  }

}
