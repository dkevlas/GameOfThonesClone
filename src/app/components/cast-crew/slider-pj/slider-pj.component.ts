import { Component, OnInit } from '@angular/core';
import { Character, characters } from '../characters';

@Component({
  selector: 'app-slider-pj',
  templateUrl: './slider-pj.component.html',
  styleUrl: './slider-pj.component.scss'
})
export class SliderPjComponent implements OnInit{

  charactersItems: Character[] = characters

  cantCharacters: number = this.charactersItems.length
  widthImg: number = 75
  left: string = '0px'
  leftCurrent: number = parseInt(this.left)

  prevDisabled: boolean = false
  nextDisabled: boolean = true

  btnPrev(){
    this.nextDisabled = false
    this.leftCurrent -= this.widthImg
    this.left = `${this.leftCurrent}px`
    if(this.left == `${-(this.cantCharacters * this.widthImg) + 300}px`){
      this.prevDisabled = true
    }
  }

  btnNext(){
    this.prevDisabled = false
    this.leftCurrent += this.widthImg
    this.left = `${this.leftCurrent}px`
    if(this.left == '0px'){
      this.nextDisabled = true
    }
  }

  selectIndex: number = 1

  title: string = ''
  paragraph: string = ''
  bgImage: string = ''
  alCharacter: string = ''

  changeSelect(n: number){
    this.selectIndex = n
    this.title = this.charactersItems[this.selectIndex].name
    this.paragraph = this.charactersItems[this.selectIndex].description
    this.bgImage = this.charactersItems[this.selectIndex].bgCharacter
    this.alCharacter = this.charactersItems[this.selectIndex].alt
  }
  
  ngOnInit(): void {
    this.changeSelect(this.selectIndex)
  }
}