import { animate, state, style, transition, trigger } from '@angular/animations';
import { ComponentFactoryResolver, EventEmitter, HostBinding, HostListener, Input, ViewChild } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DrawerFormDirective } from 'src/app/directives/drawer-form.directive';
import { DrawerForm } from 'src/app/models/drawer-form';
import { DrawerHandlerComponent } from 'src/app/models/drawer-handle-comp.model';
import { DrawerHandlerService } from 'src/app/services/drawer-handler.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  @Input() drawerMenu: DrawerHandlerComponent;
  @Input() width: number;
  @HostBinding('style.width') elementWidth: any;
  @Output() hideDrawer = new EventEmitter();
  @ViewChild(DrawerFormDirective, { static: true }) drawerhost: DrawerFormDirective;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resize()
  }

  constructor(private compFac: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadForm();
    this.resize();
  }


  resize() {
    if (window.innerWidth < this.width) {
      this.elementWidth = '100%';
    } else {
      this.elementWidth = this.width + 'px';
    }
  }

  loadForm() {
    const componentFactory = this.compFac.resolveComponentFactory(this.drawerMenu.component);

    const viewContainerRef = this.drawerhost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as DrawerForm).hideDrawer = this.hideDrawer;
    (componentRef.instance as DrawerForm).data = this.drawerMenu.data;
  }

}


@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  animations: [
    trigger(
      'slideAnimation',
      [
        state('open', style({ transform: 'translateX(0)' })),
        transition('void => *', [
          style({ transform: 'translateX({{width}}px)' }),
          animate(300)
        ], { params: { width: 1000 } }),
        transition('* => void', [
          animate(300, style({ transform: 'translateX({{width}}px)' }))
        ], { params: { width: 1000 } })
      ]
    )
  ],
  styleUrls: ['./drawer-container.component.scss']
})
export class DrawerContainerComponent implements OnInit {
  visible = false;
  subscription: Subscription;
  drawerMenu: DrawerHandlerComponent;
  DEFAULT_WIDTH = 1000;
  width = 0;

  constructor(private readonly drawHandler: DrawerHandlerService) {
    this.drawHandler.getDrawer().subscribe(menu => {
      this.drawerMenu = menu;
      // console.log('menu', this.drawerMenu);
      this.width = this.drawerMenu.width ? this.drawerMenu.width : this.DEFAULT_WIDTH;
      if (menu.component !== null) {
        document.documentElement.style.overflow = 'hidden';
        this.visible = true
      }
    });
  }
  ngOnInit(): void {

  }

  close() {
    document.documentElement.style.overflow = 'auto';
    this.visible = false;
  }

}

