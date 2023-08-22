import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { SlickListComponent } from './components/slick-list/slick-list.component';
import { ShowProductsComponent } from "./components/show-products/show-products.component";
import { HomeComponent } from './components/home/home.component';

// import { BrowserModule } from '@angular/platform-browser';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    SlickListComponent,
    ShowProductsComponent,

  ],
  imports: [
    // BrowserModule,
    CommonModule,
    SlickCarouselModule
  ],
  exports:[
    HomeComponent
  ]

})
export class HomeModule { }
