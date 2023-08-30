import { Component } from '@angular/core';
import { HomeService } from './../../services/home.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent {
  products:any[]=[];
  constructor(private myservice:HomeService){}
  getAllProducts(){
    this.myservice.getAllProducts().subscribe({
      next:(data:any)=>{
        this.products=data;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
