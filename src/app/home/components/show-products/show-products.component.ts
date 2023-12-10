import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../products/services/products.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products:any[]=[];
  constructor(private myservice:ProductsService){}
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts(){
    this.myservice.getAllProducts().subscribe({
      next:(data:any)=>{
        this.products=data.slice(0,10);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
