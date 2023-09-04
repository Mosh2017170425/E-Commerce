import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any[]=[];
  constructor(private router:Router){}
  ngOnInit(): void {
    let data = localStorage.getItem(environment.cart);
    this.products = data ? JSON.parse(data):[] ;
  }
  removeFromCart(id:number){
    this.products = this.products.filter((product)=>product.id != id);
    localStorage.setItem(environment.cart,JSON.stringify(this.products));
  }
  increment(index:number){
    this.products[index].qty++;
    localStorage.setItem(environment.cart,JSON.stringify(this.products));
  }
  decrement(index:number){
    if(this.products[index].qty>1)
    {
      this.products[index].qty--;
      localStorage.setItem(environment.cart,JSON.stringify(this.products));
    }
  }
  getTotalPrice(){
    let totalPrice=0;
    this.products.map((product)=>{
      totalPrice+=product.qty*product.price;
    });
    return totalPrice;
  }
  getCount(){
    let count=0;
    this.products.map((product)=>{
      count+=product.qty;
    });
    return count;
  }
  checkout(){
    this.router.navigate(['/payment'],{state:this.products});
  }
  clear(){
    this.products=[];
    localStorage.setItem(environment.cart,JSON.stringify(this.products));
  }
}
