import { Component, OnInit } from '@angular/core';
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products:any[]=[];
  constructor(private myservice:HomeService){}
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
