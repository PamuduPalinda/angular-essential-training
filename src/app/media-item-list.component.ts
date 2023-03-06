import { Component } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItems;

  constructor(private medisItemService: MediaItemService){}
  ngOnInit(){
    this.mediaItems=this.medisItemService.get()
  }

  onMediaItemDelete(mediaItem) { 
    this.medisItemService.delete(mediaItem);
  }
}
