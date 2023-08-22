import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
//  ------app components modules----------
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
//----------data module------------
import { HttpClientModule } from '@angular/common/http';
//---------services----------------
import { ProductsService } from './products/services/products.service'; 
//----------sidenav-------
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    HomeModule,
//-------material modules--------
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
//----------routing-------------------
    RouterOutlet,
//-------Data----------------------
    HttpClientModule  
    ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
