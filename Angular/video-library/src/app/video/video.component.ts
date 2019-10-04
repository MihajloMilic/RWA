import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Video } from './state/video.model';
import { Store } from '@ngrx/store';
import { LoadVideosApi, SelectVideo } from './state/video.actions';
import { Observable } from 'rxjs';

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"]
})
export class VideoComponent implements OnInit {
  public videos$: Observable<Video[]>;

  constructor(private router: Router, private store: Store<{videos: {entities: Video[]}}>) {    
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadVideosApi());
    this.videos$ = this.store.select(store => Object.keys(store.videos.entities).map(k => store.videos.entities[k]));
    this.videos$.subscribe(res => console.log(res))
  }

  public onVideoSelect(video: Video) {
    this.store.dispatch(new SelectVideo({video}));
    this.router.navigate(["player"]);
  }
}
