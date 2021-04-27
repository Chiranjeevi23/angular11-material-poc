import { Component, EventEmitter, OnInit, Output, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss']
})
export class ActionMenuComponent implements OnInit {

  @Output() menuItemClick = new EventEmitter();
  @Input() title: string;
  @Input() options: ActionOptions[];
  showMenu = false;


  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('focusout', ['$event'])
  fOut(event: any) {
    if (!this.elementRef.nativeElement.contains(event.relatedTarget)) {
      this.showMenu = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  itemClick(option: any) {
    this.menuItemClick.emit(option);
    this.showMenu = false;
  }

}

export interface ActionOptions {
  name: string; desc: string;
}
