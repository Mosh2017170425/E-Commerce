import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {
  products:any[]=[];
  tax=0;
  constructor(private router:Router){}
  ngOnInit(): void {
    let data = localStorage.getItem(environment.cart);
    this.products = data ? JSON.parse(data):[] ;
  }
  ngOnDestroy(): void {
    localStorage.setItem(environment.cart,JSON.stringify(this.products));
  }
  removeFromCart(id:number):void{
    this.products = this.products.filter((product)=>product.id != id);
  }
  increment(index:number):void{
    this.products[index].qty++;
  }
  decrement(index:number):void{
    if(this.products[index].qty>1)
    {
      this.products[index].qty--;
    }
  }
  getTotalPrice():number{
    let totalPrice=0;
    this.products.map((product)=>{
      totalPrice+=product.qty*product.price;
    });
    return totalPrice;
  }
  getCount():number{
    let count=0;
    this.products.map((product)=>{
      count+=product.qty;
    });
    return count;
  }
  clear(){
    this.products=[];
  }
  checkout(){
    this.router.navigateByUrl('/payment',{state:this.products});
  }
  navigateToShop(){
    this.router.navigate(['/products']);
  }
}
