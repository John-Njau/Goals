import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  // constructor(private elem:ElementRef){
  //   this.elem.nativeElement.style.textDecoration='line-through'
  // }

  constructor(private elem: ElementRef) { }

  // actions taken in by the textDeco function
  @HostListener('click') onClicks() {
    this.textDeco('line-through')
  }

  @HostListener('dblclick') onDoubleClicks() {
    this.textDeco('None')
  }

  private textDeco(action: string) {
    this.elem.nativeElement.style.textDecoration = action;
  }

}
