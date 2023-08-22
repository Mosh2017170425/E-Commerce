import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.css']
})
export class FilterSidebarComponent {
 
  @Input() categories:any[]=[];
  @Input() price:any;
  @Input() checkboxesCategory:any
  @Input() checkboxesAvailable:any
  @Output() dataChange=new EventEmitter<any>();
  
  change(type:string){
    this.dataChange.emit(type)
  }
}
