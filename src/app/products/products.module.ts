import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import {MatDialogModule} from "@angular/material/dialog";

import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FilterPopupComponent } from './components/filter-popup/filter-popup.component';


import { SortPipe } from './pipes/sort.pipe';
import { FilterPricePipe } from './pipes/filter-price.pipe'
import { FilterCategoryPipe } from './pipes/filter-category.pipe';
import { FilterAvailabilityPipe } from './pipes/filter-availability.pipe';

// import { CheckboxStyleDirective } from './directives/checkbox-style.directive';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterSidebarComponent } from './components/filter-sidebar/filter-sidebar.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    FilterPopupComponent,

    //------>pipes<---------//
    SortPipe,
    FilterPricePipe,
    FilterCategoryPipe,
    FilterAvailabilityPipe,

   //---- directives----------//
    // CheckboxStyleDirective,
    ProductCardComponent,
    FilterSidebarComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    SharedModule
  ],
 
})
export class ProductsModule { }
