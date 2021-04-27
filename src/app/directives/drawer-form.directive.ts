import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDrawerForm]'
})
export class DrawerFormDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
