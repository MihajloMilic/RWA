import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Video } from './video.model';
import { VideoActions, VideoActionTypes } from './video.actions';

export const videosFeatureKey = 'videos';

export interface State extends EntityState<Video> {
  selectedVideo: Video;
}

export const adapter: EntityAdapter<Video> = createEntityAdapter<Video>();

export const initialState: State = adapter.getInitialState({
  selectedVideo: null
});

export function reducer(
  state = initialState,
  action: VideoActions
): State {
  switch (action.type) {
    case VideoActionTypes.AddVideo: {
      return adapter.addOne(action.payload.video, state);
    }

    case VideoActionTypes.UpsertVideo: {
      return adapter.upsertOne(action.payload.video, state);
    }

    case VideoActionTypes.AddVideos: {
      return adapter.addMany(action.payload.videos, state);
    }

    case VideoActionTypes.UpsertVideos: {
      return adapter.upsertMany(action.payload.videos, state);
    }

    case VideoActionTypes.UpdateVideo: {
      return adapter.updateOne(action.payload.video, state);
    }

    case VideoActionTypes.UpdateVideos: {
      return adapter.updateMany(action.payload.videos, state);
    }

    case VideoActionTypes.DeleteVideo: {
      return adapter.removeOne(action.payload.id, state);
    }

    case VideoActionTypes.DeleteVideos: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case VideoActionTypes.LoadVideos: {
      const store = adapter.addAll(action.payload.videos, state);
      return store;
    }

    case VideoActionTypes.ClearVideos: {
      return adapter.removeAll(state);
    }

    case VideoActionTypes.SelectVideo: {
      return {...state, selectedVideo: action.payload.video}
    }
    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
