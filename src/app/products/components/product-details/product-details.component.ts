import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { SharedService } from './../../../shared/services/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product:any;
  relatedProducts:any[]=[]
  categoryProducts:any[]=[];
  imageSrc:string='';
  quantity=1;
  slideConfig = {
     "slidesToShow": 4,
     "slidesToScroll": 4,
     "arrows":false,
  };
  constructor(
    private activatedRoute:ActivatedRoute,
    private myservice:ProductsService,
    private sharedService: SharedService
  ){}
  ngOnInit(): void {
    console.log('init');
    // let category= this.activatedRoute.snapshot.paramMap.get('category');
    // this.getCategoryProducts(category);
    this.categoryProducts=[
      {id:1,title:"ee",category:'elec',price:200,rating:{rate:3,count:0}},
      {id:2,title:"we",category:'women',price:1000,rating:{rate:1,count:3}},
      {id:3,title:"man",category:'man',price:900 ,rating:{rate:5,count:5}},
      {id:4,title:"elec",category:'elec',price:1000,rating:{rate:2,count:10}},
      {id:5,title:"man manman manma nmanm anmanm anmanman manmanmanma nmanmanman",category:'man',price:2000 ,rating:{rate:4,count:0}},
      {id:6,title:"man",category:'man',price:3000 ,rating:{rate:3,count:3}},
    ]
    this.activatedRoute.params.subscribe(({id})=>{
      this.relatedProducts = this.categoryProducts.filter((item)=>{
        if(id==item.id){
          this.product=item;
        }
        return id != item.id
      });
      // this.imageSrc=this.product.image;
      this.product.images=[
        'assets/images/slick-list/jewelery-1.jpg',
        'assets/images/slick-list/electronics-2.jpg',
        'assets/images/slick-list/electronics-3.jpg',
        'assets/images/slick-list/women-3.jpg',
        'assets/images/slick-list/women-2.jpg',
        'assets/images/slick-list/women-1.jpg'
      ];
      this.product.description="Candidates are working together in one of the following Suggested Projects"+
          "product based program that will empower you to learn the"+
          "latest technologies in both MEARN and MERN stack"+
          "development technologies and tools. ";
    });
    this.imageSrc=this.product.images[0];
  }
  
  getCategoryProducts(category:string){
    this.myservice.getCategoryProducts(category).subscribe({
      next:(data:any)=>{
        this.categoryProducts = data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  changeImage(imgSrc:string){
    this.imageSrc=imgSrc;
  }
  decrement(){
    if(this.quantity){
      this.quantity--;
    }
   
  }
  increment(){
    if(!this.quantity)
      this.quantity=1;
    else
      this.quantity++;

  }
  addToCart(){
    this.sharedService.addToCart(this.product,this.quantity)
  }
  addToFavorites(){
    this.sharedService.addToFavorites(this.product.id);
  }
}

