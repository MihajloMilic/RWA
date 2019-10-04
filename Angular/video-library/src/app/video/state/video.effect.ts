import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, Effect } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError, exhaustMap, switchMap } from "rxjs/operators";
import { VideoService } from "../services/video.service";
import { VideoActionTypes, SearchVideo } from "./video.actions";

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
  @Effect()
  searchVideo$ = this.actions$
  .pipe(
    ofType<SearchVideo>(VideoActionTypes.SearchVideo),
    switchMap((action) => {
      return this.videoService.searchVideos(action.payload).pipe(
        map(videos => ({
          type: VideoActionTypes.LoadVideos,
          payload: { videos }
        })),
        catchError(() => EMPTY)
     ); 
    }),  
  );

  constructor(private actions$: Actions, private videoService: VideoService) {}
}
