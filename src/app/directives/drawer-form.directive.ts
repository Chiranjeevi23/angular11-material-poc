import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDrawerForm]'
})
export class DrawerFormDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: '[componentPlaceholder]'
})
export class ComponentPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

