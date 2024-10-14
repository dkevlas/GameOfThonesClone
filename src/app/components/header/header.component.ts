import { Component } from '@angular/core';
import { Imagen } from './images';
import { imagesSlider } from './images';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private leftAutomatico: any

  ngAfterViewInit(): void {
    this.autoSlide()
  }

  ngOnDestroy(): void {
    if(this.leftAutomatico){
      clearInterval(this.leftAutomatico)
    }
  }

  listImg: Imagen[] = imagesSlider

  cantImgs: number = this.listImg.length
  widthListImg: string = `${this.cantImgs * 100}%`
  positionLeft: string = '0%'
  moveLeft: number = 100

  btnPrev(left: string){
    console.log(parseInt(this.positionLeft))
    if(parseInt(this.positionLeft) == 0){
      this.positionLeft = `-${(this.cantImgs) * 100}%`
    }
    this.positionLeft = `${parseInt(this.positionLeft) + this.moveLeft }%`
  }

  btnNext(left: string){
    if(this.positionLeft == `-${(this.cantImgs - 1) * 100}%`){
      this.positionLeft = '0%'
    }
    this.positionLeft = `${parseInt(this.positionLeft) - this.moveLeft}%`
  }

  autoSlide(){
    this.leftAutomatico = setInterval((left: string)=>{
      if(this.positionLeft ==   `-${(this.cantImgs - 1) * 100}%`){
        this.positionLeft = '0%'
      } else{
        this.positionLeft = `${parseInt(this.positionLeft) - 100}%`
        left = this.positionLeft
      }
    }, 5000)
  }
}

