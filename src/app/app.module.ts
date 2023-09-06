import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItWorkComponent } from './it-work/it-work.component';
import { FooterComponent } from './footer/footer.component';
import { MusicWorkComponent } from './music-work/music-work.component';
import { ImageSliderComponent } from './it-work/image-slider/image-slider.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItWorkComponent,
    FooterComponent,
    MusicWorkComponent,
    ImageSliderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
