import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-checkboxes',
  templateUrl: './collapse-checkboxes.component.html',
  styleUrls: ['./collapse-checkboxes.component.css']
})
export class CollapseCheckboxesComponent {
  @Input() checkboxesData:any;
  @Input() title:string='';

}

//checkboxesData=[{label,value}]
