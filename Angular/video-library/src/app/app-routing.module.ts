import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './video/components/video-player/video-player.component';
import { VideoComponent } from './video/video.component';


const routes: Routes = [
  {path: 'player', component: VideoPlayerComponent},
  {path: '**', component: VideoComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
