import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SlickListComponent } from './slick-list/slick-list.component';

import { BrowserModule } from '@angular/platform-browser';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    SliderComponent,
    SlickListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SlickCarouselModule
  ],
  exports:[
    SliderComponent,
    SlickListComponent
  ]

})
export class HomeModule { }
