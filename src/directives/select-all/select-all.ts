import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * Generated class for the SelectAllDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: 'ion-input[select-all]' // Attribute selector
})
export class SelectAllDirective {

  constructor(private el: ElementRef) {
    console.log('Hello SelectAllDirective Directive');
  }

  @HostListener('click')
  selectAll() {
    // access to the native input element
    let nativeEl: HTMLInputElement = this.el.nativeElement.querySelector('input');

    if (nativeEl) {
      // if (nativeEl.setSelectionRange) {
      //   // select the text from start to end
      //   return nativeEl.setSelectionRange(0, nativeEl.value.length);
      // }

      nativeEl.select();
    }
  }

}