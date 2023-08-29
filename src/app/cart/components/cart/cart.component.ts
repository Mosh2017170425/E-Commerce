import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:any[]=[];
  ngOnInit(): void {
    let data = localStorage.getItem(environment.cart);
    this.products = data ? JSON.parse(data):[] ;
    console.log(this.products)
  }
  removeFromCart(id:number){
    this.products = this.products.filter((product)=>product.id != id);
    localStorage.setItem(environment.cart,JSON.stringify(this.products));
  }
}
