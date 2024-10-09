import { Component } from '@angular/core';
interface Imagen{
  img: string
}
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

  listImg = [
    {img: 'https://www.hola.com/horizon/landscape/e5e8b656b9fe-lisa-t.jpg', alt: 'imagen 1'},
    {img: 'https://storage.googleapis.com/atime-media-prod/content/9d00564c-d163-428b-a222-5ffea9752d26.jpeg', alt: 'imagen 2' },
    {img: 'https://www.rollingstone.com/wp-content/uploads/2024/06/lisa-new-solo-music.jpg?w=1581&h=1054&crop=1', alt: 'imagen 3' },
    {img: 'https://www.billboard.com/wp-content/uploads/2024/06/LISA-press-2024-billboard-1548.png', alt: 'imagen 4' },
    {img: 'https://static.bangkokpost.com/media/content/20240209/c1_2739485_240209221759.jpg', alt: 'imagen 5' },
    {img: 'https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2023/05/07/blackpinks_lisa_0.png', alt: 'imagen 6' },
  ]

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

