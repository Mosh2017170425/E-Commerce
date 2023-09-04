import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements  OnInit {
  value:any;
  tax:number=0.0;
  shipping:number=0.01;
  products:any[]=[];
  constructor( private router:ActivatedRoute){
    this.products=[
      {id:1,title:'Green Tomatoes',price:1000,qty:2,img:'assets/images/slick-list/women-1.jpg'},
      {id:2,title:'Green Tomatoes',price:100,qty:1,img:'assets/images/slick-list/women-1.jpg'},
      {id:3,title:'Green Tomatoes',price:1200,qty:3,img:'assets/images/slick-list/women-1.jpg'},
      {id:4,title:'Green Tomatoes',price:400,qty:4,img:'assets/images/slick-list/women-1.jpg'},
    ]
  }
  ngOnInit(): void {
    //products=router.data
  }
  chg(e:any){
    console.log(this.value)
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
}
