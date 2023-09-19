import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterPopupComponent } from '../filter-popup/filter-popup.component';

import { ProductsService } from './../../services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent  implements OnInit{
  products:any;
  categories:any;
  sortField:string='none';
  sortFields=['price','rate'];
  price:any={'minPrice':null,'maxPrice':null}
  checkboxesCategory:any={};
  checkboxesAvailable:any={"in-stock":false,"out-stock":false}

  constructor(private service:ProductsService,private mydialog:MatDialog,private actRoute:ActivatedRoute){
      actRoute.queryParams.subscribe((params)=>{
        console.log(params);
      })
  }
  ngOnInit(): void {
    // this.getproducts();
    // this.getallCategories();
    this.products=[
            {id:1,title:"ee",category:'Electronics',price:200,rating:{rate:3,count:0},image:'assets/images/slick-list/electronics-1.jpg'},
            {id:2,title:"we",category:"Women's Clothing",price:1000,rating:{rate:1,count:3},image:'assets/images/slick-list/women-3.jpg'},
            {id:3,title:"man",category:"Men's Clothing",price:900 ,rating:{rate:5,count:5},image:'assets/images/slick-list/men-2.jpg'},
            {id:4,title:"elec",category:'Electronics',price:1000,rating:{rate:2,count:10},image:'assets/images/slick-list/electronics-2.jpg'},
            {id:5,title:"man manman manma nmanm anmanm anmanman manmanmanma nmanmanman",category:"Men's Clothing",price:2000 
            ,rating:{rate:4,count:0},image:'assets/images/slick-list/men-3.jpg'},
            {id:6,title:"man",category:"Men's Clothing",price:3000 ,rating:{rate:3,count:3},image:'assets/images/slick-list/men-3.jpg'},
          ]
          this.categories=['man','elec','women'];
          this.checkboxesCategory={'man':false,'elec':false,'women':false}
          
  }
  getproducts(){
    this.service.getAllProducts().subscribe(
      {
        next:(data)=>{
          console.log(data);
          this.products=data;
        },
        error:(err)=>{
          console.log(err)
        }
      }
    );
  }
  getallCategories(){
    this.service.getAllCategories().subscribe({
      next:(data)=>{
        console.log(data);
        this.categories=data;
        this.createCategoryboxes();
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  createCategoryboxes(){
    for(let cate of this.categories){
      this.checkboxesCategory[cate]=false;
    }
  }
  clear(){
    Object.keys(this.checkboxesAvailable).forEach((key) =>{
      this.checkboxesAvailable[key]=false;
    });
    Object.keys(this.checkboxesCategory).forEach((key) =>{
      this.checkboxesCategory[key]=false;
    });
    
    this.checkboxesCategory={...this.checkboxesCategory};
    this.checkboxesAvailable={...this.checkboxesAvailable}
    this.price.minPrice=null;
    this.price.maxPrice=null;
    this.sortField='none';
  }
  openDialog(){
    const dialogRef=this.mydialog.open(FilterPopupComponent,{
      data:{
        checkboxesCategory:{...this.checkboxesCategory},
        checkboxesAvailable:{...this.checkboxesAvailable},
        minPrice:this.price.minPrice,
        maxPrice:this.price.maxPrice
      }
    }
    );
    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.checkboxesAvailable={...result.checkboxesAvailable};
        this.checkboxesCategory={...result.checkboxesCategory};
        this.price.minPrice=result.minPrice;
        this.price.maxPrice=result.maxPrice;
      }
      
    });
  }
  
  changeSelected(e:any){
    this.sortField=e.target.value;
  }
  change(type:string){
    if(type === 'boxesCategory'){
      this.checkboxesCategory={...this.checkboxesCategory}
    }
    else if(type === 'available'){
      this.checkboxesAvailable={...this.checkboxesAvailable}
    }
  }
}