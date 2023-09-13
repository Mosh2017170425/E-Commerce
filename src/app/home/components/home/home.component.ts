import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
