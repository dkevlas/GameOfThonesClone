import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CastCrewComponent } from './components/cast-crew/cast-crew.component';
import { SliderPjComponent } from './components/cast-crew/slider-pj/slider-pj.component';
import { SummaryPjComponent } from './components/cast-crew/slider-pj/summary-pj/summary-pj.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { SeasonComponent } from './components/episodes/season/season.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContentImgComponent } from './components/gallery/content-img/content-img.component';
import { NotImageDirective } from './components/not-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CastCrewComponent,
    SliderPjComponent,
    SummaryPjComponent,
    EpisodesComponent,
    SeasonComponent,
    GalleryComponent,
    ContentImgComponent,
    NotImageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
