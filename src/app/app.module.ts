import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CastCrewComponent } from './components/cast-crew/cast-crew.component';
import { SliderPjComponent } from './components/cast-crew/slider-pj/slider-pj.component';
import { SummaryPjComponent } from './components/cast-crew/slider-pj/summary-pj/summary-pj.component';
import { EpisodesComponent } from './components/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CastCrewComponent,
    SliderPjComponent,
    SummaryPjComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
