import { Component } from '@angular/core';
@Component({
  selector: 'app-slick-list',
  templateUrl: './slick-list.component.html',
  styleUrls: ['./slick-list.component.css']
})

export class SlickListComponent {
  
  slides = [
    {img: "../../../../assets/images/slick-list/women-1.jpg",name:"Women's Clothing"},
    {img: "../../../../assets/images/slick-list/men-1.jpg",name:"Men's Clothing"},
    {img: "../../../../assets/images/slick-list/women-2.jpg",name:"Momen's Clothing"},
    {img: "../../../../assets/images/slick-list/electronics-2.jpg",name:"Electronics"},
    {img: "../../../../assets/images/slick-list/jewelery-1.jpg",name:"Jewelery"},
    {img: "../../../../assets/images/slick-list/men-2.jpg",name:"Men's Clothing"},
    {img: "../../../../assets/images/slick-list/electronics-1.jpg",name:"Electronics"},
    {img: "../../../../assets/images/slick-list/electronics-3.jpg",name:"Electronics"},
    {img: "../../../../assets/images/slick-list/jewelery-2.jpg",name:"Jewelery"},
    {img: "../../../../assets/images/slick-list/women-3.jpg",name:"Women's Clothing"}
  ];
  slideConfig = {
     "slidesToShow": 3,
     "slidesToScroll": 3,
    //  "infinite": true,
     "arrows":true,
     prevArrow:'<span class="fa fa-angle-left  prev"></span>',
     nextArrow:'<span class="fa fa-angle-right next"></span>',
     "responsive":[
        {
          "breakpoint":991,
          "settings":{
            "slidesToShow": 2,
            "slidesToScroll": 2,
          }
        },
        {
          "breakpoint":767,
          "settings":{
            "slidesToShow": 1,
            "slidesToScroll": 1,
          }
        }
     ]
  };
}