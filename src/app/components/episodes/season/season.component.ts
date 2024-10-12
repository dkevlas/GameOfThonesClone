import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Season } from './../seasons-data/seasonInterface';
import { EpisodesS1 } from './../seasons-data/season1';
import { EpisodesS2 } from './../seasons-data/season2';
import { EpisodesS3 } from './../seasons-data/season3';
import { BgSeason, bgSeason } from './../seasons-data/bgSeasonInterface';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrl: './season.component.scss'
})
export class SeasonComponent implements OnInit, OnChanges{

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['seasonSelect']){
      this.numero = parseInt(this.seasonSelect)
    }
    this.applyChanges(this.numero)
    this.topAllImg = '0px'
  }

  s1: Season[] = EpisodesS1
  s2: Season[] = EpisodesS2
  s3: Season[] = EpisodesS3

  bgSeason : BgSeason[] = bgSeason

  allSeason: any[] = [
    this.s1,
    this.s2,
    this.s3
  ]

  @Input()
  seasonSelect: string = ''

  numero: number = parseInt(this.seasonSelect)

  subTitle: string = ''
  description: string = ''
  img: string = ''
  numEpisode: number = 0
  seasonCurrent: Season[] = []
  bgCurrent: string = ''

  //CANTIDAD DE EPISODIOS
  cantEpisodes: number = 0
  applyChanges(s: number): void{
    this.seasonCurrent = this.allSeason[s - 1]
    this.subTitle = this.seasonCurrent[0].title
    this.description = this.seasonCurrent[0].description
    this.numEpisode = this.seasonCurrent[0].episode
    this.bgCurrent = `url(${bgSeason[s - 1].season})`
    //CAPITULO 1 cada vez que se cambia de TEMPORADA
    this.selectImg = 0
    this.cantEpisodes = this.seasonCurrent.length
  }

  //WIDTH IMG
  selectImg: number | undefined
  topAllImg: string = '0px'
  topCurrent: number = 0
  
  selectEpisode(e: number): void{
    //CAMBIA EL TAMAÑO DE LA IMAGEN DEL EPISODIO
    this.selectImg = e,
    this.subTitle = this.seasonCurrent[e].title
    this.description = this.seasonCurrent[e].description
  }

  selectionPrevius: any

  moveEpisose(m: number): void{
    if(m == 1){
      this.topAllImg = '0px'
    } else if (m < 2 || m > (this.cantEpisodes - 2)){
    } else{
      this.topCurrent = 90 * (m - 1)
      this.topAllImg = `-${this.topCurrent}px`
    }
  }
}