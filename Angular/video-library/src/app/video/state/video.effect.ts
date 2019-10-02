import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { VideoService } from "../services/video.service";
import { VideoActionTypes } from "./video.actions";

@Injectable()
export class VideoEffects {
  loadVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VideoActionTypes.LoadVideosApi),
      mergeMap(() =>
        this.videoService.loadVideos().pipe(
          map(videos => ({
            type: VideoActionTypes.LoadVideos,
            payload: { videos }
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private videoService: VideoService) {}
}
