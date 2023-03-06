import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { throwError, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {
  constructor(private http: HttpClient) {}


  get(medium) {
    const getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        }),
        catchError(this.handleError)
      );
  }

  add(mediaItem) {
    return this.http.post('mediaItems', mediaItem)
    .pipe(catchError(this.handleError));
  }

  delete(mediaItem) {
    return this.http.delete(`mediaItems/${mediaItem.id}`)
    .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse){
      console.log(error.message);
      return throwError('A data error occured, please try again')
    }
  }

  


interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
