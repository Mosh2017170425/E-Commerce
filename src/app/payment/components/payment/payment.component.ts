import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  value:any;
  show:boolean=true;
  tax:number=0.0;
  shipping:number=0.01;
  products:any[]=[];
  constructor( private router:Router){
    let data = this.router.getCurrentNavigation()?.extras.state;
    this.products = Object.values({...data});
    console.log(this.products);
  }
  ngOnDestroy(): void {
    localStorage.setItem(environment.cart,JSON.stringify(this.products));
  }
  chg(){
    this.show=true;
  }
  click(payment:string){
    this.value=payment;
  }
  decrement(index:number){
    if( this.products[index].qty>1){
      this.products[index].qty--;
    }
  }
  increment(index:number){
    this.products[index].qty++;
  }
  remove(id:number){
    this.products = this.products.filter((item)=>item?.id != id);
    console.log(this.products);
  }
  getsubTotal(){
    let subtotal = 0;
    this.products.map((product)=>{
      subtotal+=product.price * product.qty;
    });
    return subtotal;
  }
  getTotalPrice(){
    let total= this.tax + this.shipping;
    this.products.map((product)=>{
      total+=product.price * product.qty;
    });
    return total;
  }
  pay(){
    console.log('col')
  }
}
