import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.css']
})
export class FilterPopupComponent {
  categories:any[]=[];
  mydata:any;
  constructor(private mydialogRef:MatDialogRef<FilterPopupComponent>,@Inject(MAT_DIALOG_DATA) public data:any){
    this.categories=Object.keys(data.checkboxesCategory);
  }
   
  close(){
    this.mydialogRef.close();
  }
  apply(){
    this.mydialogRef.close(this.data);
  }

  clear(){
    Object.keys(this.data.checkboxesAvailable).forEach((key) =>{
      this.data.checkboxesAvailable[key]=false;
    });
    Object.keys(this.data.checkboxesCategory).forEach((key) =>{
      this.data.checkboxesCategory[key]=false;
    });
    this.data.minPrice=null;
    this.data.maxPrice=null;
  }
}
