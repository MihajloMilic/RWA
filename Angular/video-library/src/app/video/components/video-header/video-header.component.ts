import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Video } from '../../state/video.model';
import { SearchVideo } from '../../state/video.actions';

@Component({
  selector: 'video-header',
  templateUrl: './video-header.component.html',
  styleUrls: ['./video-header.component.css']
})
export class VideoHeaderComponent implements OnInit {

  constructor(private router: Router, private store: Store<{videos: {entities: Video[]}}>) { }

  ngOnInit() {
  }
  onEnter(value:string)
  {
    this.store.dispatch(new SearchVideo(value));
    this.router.navigate(["/"]);
  }

}
