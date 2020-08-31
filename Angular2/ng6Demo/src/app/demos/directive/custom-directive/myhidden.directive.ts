import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appMyhidden]'
})
export class MyhiddenDirective {

  @Input()
  person;

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(){
    if(this.person){
      this.elementRef.nativeElement.style.display = '';
    } else {
      this.elementRef.nativeElement.style.display = 'none';
    }
  }
}
