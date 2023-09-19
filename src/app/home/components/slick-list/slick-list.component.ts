import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';
@Component({
  selector: 'app-slick-list',
  templateUrl: './slick-list.component.html',
  styleUrls: ['./slick-list.component.css']
})

export class SlickListComponent implements OnInit {
  slideConfig:any;
  slides:any;
  constructor(private myservice:HomeService){}
  ngOnInit(): void {
    this.slideConfig = {
      "slidesToShow": 3,
      "slidesToScroll": 3,
      "infinite": true,
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
    this.slides = [
      {img: "assets/images/slick-list/women-1.jpg",title:"Women's Clothing"},
      {img: "assets/images/slick-list/men-1.jpg",title:"Men's Clothing"},
      {img: "assets/images/slick-list/women-2.jpg",title:"women's Clothing"},
      {img: "assets/images/slick-list/electronics-2.jpg",title:"Electronics"},
      {img: "assets/images/slick-list/jewelery-1.jpg",title:"Jewelery"},
      {img: "assets/images/slick-list/men-2.jpg",title:"Men's Clothing"},
      {img: "assets/images/slick-list/electronics-1.jpg",title:"Electronics"},
      {img: "assets/images/slick-list/electronics-3.jpg",title:"Electronics"},
      {img: "assets/images/slick-list/jewelery-2.jpg",title:"Jewelery"},
      {img: "assets/images/slick-list/women-3.jpg",title:"Women's Clothing"}
    ];

    // this.getCategories();
  }
  getCategories(){
    this.myservice.getCategories().subscribe({
      next:(data:any)=>{
        this.slides = data;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}