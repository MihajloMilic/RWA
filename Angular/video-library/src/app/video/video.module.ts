import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromVideo from "./state/video.reducer";
import { VideoComponent } from "./video.component";
import { VideoCardComponent } from "./components/video-card/video-card.component";
import { VideoListComponent } from "./components/video-list/video-list.component";
import { VideoPlayerComponent } from "./components/video-player/video-player.component";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { VideoService } from "./services/video.service";
import { VideoEffects } from "./state/video.effect";

@NgModule({
  declarations: [
    VideoComponent,
    VideoCardComponent,
    VideoListComponent,
    VideoPlayerComponent
  ],
  exports: [VideoComponent, VideoPlayerComponent],
  imports: [
    CommonModule,
    EffectsModule.forRoot([VideoEffects]),
    RouterModule.forRoot([{ path: "player", component: VideoPlayerComponent }]),
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromVideo.videosFeatureKey, fromVideo.reducer)
    // EffectsModule.forFeature([])
  ],
  providers: [VideoService],
  bootstrap: [VideoComponent]
})
export class VideoModule {}
