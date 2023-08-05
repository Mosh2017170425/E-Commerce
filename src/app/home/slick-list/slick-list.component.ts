import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-slick-list',
  templateUrl: './slick-list.component.html',
  styleUrls: ['./slick-list.component.css']
})

export class SlickListComponent {
  
  slides = [
    {img: "../../../assets/images/slider/slide-1.jpg"},
    {img: "../../../assets/images/slider/slide-3.jpg"},
    {img: "../../../assets/images/slider/slide-2.jpg"},
    {img: "../../../assets/images/slider/slide-1.jpg"},
    {img: "../../../assets/images/slider/slide-1.jpg"},
    {img: "../../../assets/images/slider/slide-3.jpg"},
    {img: "../../../assets/images/slider/slide-2.jpg"}
  ];
  slideConfig = {
     "slidesToShow": 4,
     "slidesToScroll": 4,
    //  "infinite": true,
     "arrows":true,
     prevArrow:'<span class="fa fa-angle-left  prev"></span>',
     nextArrow:'<span class="fa fa-angle-right next"></span>',
     "responsive":[
        {
          "breakpoint":479,
          "settings":{
            "slidesToShow": 1,
            "slidesToScroll": 1,
          }
        },
        {
          "breakpoint":575,
          "settings":{
            "slidesToShow": 2,
            "slidesToScroll": 2,
          }
        },
        {
          "breakpoint":767,
          "settings":{
            "slidesToShow": 3,
            "slidesToScroll": 3,
          }
        }
     ]
  };
}