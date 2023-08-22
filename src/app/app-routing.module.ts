import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { HomeComponent } from './home/components/home/home.component';
import { MyComponent } from './products/components/test/test';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products",component:AllProductsComponent},
  {path:"product",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"test",component:MyComponent},

  {path:"**",component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
