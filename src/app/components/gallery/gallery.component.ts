import { Component } from '@angular/core';
import { itemImage } from './images';
import { listImages } from './images';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  allItems: itemImage[] = listImages

  oneItem: itemImage = this.allItems[1]

  active: number = 1
  topPosition: string = '0px'

  sendInfo(i: number){
    this.oneItem = this.allItems[i]
  }

  cantImages: number = this.allItems.length
  
  moveSizeHeight: number = 70
  changePosition(indexCurrent: number){
    this.active = indexCurrent
    console.log(indexCurrent)
    if(indexCurrent < 2 ){
      this.topPosition = '0px'
    } else if (indexCurrent > (this.cantImages - 3)){
      this.topPosition = this.topPosition
    } else {
      this.topPosition = `-${this.moveSizeHeight * (indexCurrent - 1)}px`
    }
  }
}
