import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { SharedService } from './../../services/shared.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  @Input() product:any;
  favorite:boolean=false;
  constructor(private sharedService :SharedService){}
  ngOnInit(): void {
    let favoriteList=localStorage.getItem(environment.favorites);
    this.favorite = favoriteList?.includes(this.product.id)?true:false;
  }
  addToCart(){
    let quantity=1
    this.sharedService.addToCart(this.product,quantity);
  }
  addToFavorites(){
    this.sharedService.addToFavorites(this.product.id);
  }
  removeFromFavorites(){
    this.sharedService.removeFromFavorites(this.product.id);
  }
}
