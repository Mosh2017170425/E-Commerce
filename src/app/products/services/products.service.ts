import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get(`${environment.BaseUrl}products`);
  }
  getProduct(id:number){
    return this.http.get(`${environment.BaseUrl}products/${id}`);
  }
  getCategoryProducts(category:string){
    return this.http.get(`${environment.BaseUrl}products/category/${category}`);
  }
  getAllCategories(){
    return this.http.get(`${environment.BaseUrl}products/categories`);
  }
}
