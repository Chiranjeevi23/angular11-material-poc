import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { OverlaySidenavComponent } from './components/overlay-sidenav/overlay-sidenav.component';
import { ComponentPlaceholderDirective } from './directives/drawer-form.directive';
import { SpinnerService } from './services/spinner/spinner.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material-poc';
  loading: boolean = false;

  @ViewChild(ComponentPlaceholderDirective) compHost: ComponentPlaceholderDirective;

  constructor(private spinnerService: SpinnerService, private overlay: Overlay,
    private compFact: ComponentFactoryResolver) {
    // change isLoading status whenever notified
    spinnerService.onLoadingChanged.subscribe((isLoading: any) => this.loading = isLoading);
  }

  overLayEnabled: boolean = true;
  overlayRef: any;
  isOpen:boolean = false;
  showOverlaySideNav(e: any) {
    /* this.overLayEnabled = true; */
    console.log(e);

    // const compFact = this.compFact.resolveComponentFactory(OverlaySidenavComponent);
    // this.compHost.viewContainerRef.clear();
    // this.compHost.viewContainerRef.createComponent(compFact);

   /*  this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay
        .position()
        .global()
        .left(`20px`)
        .top(`75px`)
    });
    const component = new ComponentPortal(OverlaySidenavComponent);
    if (this.overLayEnabled) {
      this.overlayRef.attach(component);
      this.overLayEnabled = false;
    }

    this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach()); */

  }

  /*   toggleOverlay(val: boolean) {
      if (val) {
        this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
      }
    }
   */

}
