import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Video } from "../state/video.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class VideoService {
  private baseUrl = "http://localhost:3000";
  
  constructor(private http: HttpClient) {}

  public loadVideos(): Observable<Video> {
    return this.http.get<Video>(`${this.baseUrl}/videos`);
  }
  public searchVideos(search:string): Observable<Video>{
    return this.http.get<Video>(`${this.baseUrl}/videos?q=`+search);
  }
}
