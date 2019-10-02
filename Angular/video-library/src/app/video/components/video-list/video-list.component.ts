import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../state/video.model';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Observable<Video>[];

  @Output() selectVideo: EventEmitter<number>;

  constructor() {
    this.selectVideo = new EventEmitter();
   }

  ngOnInit() {
  }

  public onSelectVideo(video: number) {
    this.selectVideo.emit(video);
  }
}
