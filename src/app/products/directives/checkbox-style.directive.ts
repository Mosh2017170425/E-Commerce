import { Directive,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCheckboxStyle]'
})
export class CheckboxStyleDirective {

  constructor(private myref:ElementRef) { }
  @HostListener('click') click(){
    if(this.myref.nativeElement.checked){
      this.myref.nativeElement.style.backgroundColor="red";
      console.log(this.myref.nativeElement);
    }
  }


}
