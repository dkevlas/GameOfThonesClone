import { Component, Input, OnInit } from '@angular/core';
import { itemImage } from '../images';

@Component({
  selector: 'app-content-img',
  templateUrl: './content-img.component.html',
  styleUrl: './content-img.component.scss'
})
export class ContentImgComponent implements OnInit {

  @Input()
  itemShow!: itemImage

  img: string = ''
  ngOnInit(): void {
    this.img = this.itemShow.img
      this.itemShow
  }
}
