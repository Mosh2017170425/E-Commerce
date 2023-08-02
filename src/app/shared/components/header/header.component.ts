import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output('toggleEvent') toggleEvent= new EventEmitter();
  //fire toggle event
  sidenavToggle(){
    this.toggleEvent.emit();
  }

}
