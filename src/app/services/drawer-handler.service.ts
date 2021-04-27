import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SampleDrawerFormComponent } from '../components/sample-drawer-form/sample-drawer-form.component';
import { DrawerHandlerComponent, DrawerHandlerComponents } from '../models/drawer-handle-comp.model';


@Injectable({
  providedIn: 'root'
})
export class DrawerHandlerService {
  components: DrawerHandlerComponents = {
    sampleDrawerFormComponent: { component: SampleDrawerFormComponent, data: {} }
  }

  val: DrawerHandlerComponent = { component: null, data: null };

  private drawerSubject = new BehaviorSubject<DrawerHandlerComponent>(this.val);

  getDrawer(): Observable<DrawerHandlerComponent> {
    return this.drawerSubject.asObservable();
  }

  emit(component: any): void {
    console.log('emit ', component)
    this.drawerSubject.next(component);
  }

  getForm(item: string, addtionalData?: object): void {
    if (addtionalData) {
      this.emit({
        component: this.components[item].component,
        data: {
          ...this.components[item].data,
          ...addtionalData
        }
      });
    } else {
      this.emit(this.components[item]);
    }
  }
}
