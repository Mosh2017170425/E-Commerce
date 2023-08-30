import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { SlickListComponent } from './components/slick-list/slick-list.component';
import { ShowProductsComponent } from "./components/show-products/show-products.component";
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
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
    CommonModule,
    SlickCarouselModule,
    SharedModule
  ],
  exports:[
    HomeComponent
  ]

})
export class HomeModule { }
