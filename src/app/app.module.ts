import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DrawerFormDirective } from './directives/drawer-form.directive';
import { MatDividerModule } from '@angular/material/divider';
import { DrawerComponent, DrawerContainerComponent } from './components/drawer/drawer.component';
import { SampleComponent } from './components/sample/sample.component';
import { SampleDrawerFormComponent } from './components/sample-drawer-form/sample-drawer-form.component';
import { ActionMenuComponent } from './components/action-menu/action-menu.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';
import { Covid19trackerComponent } from './components/covid19tracker/covid19tracker.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner/spinner.service';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DrawerFormDirective,
    DrawerComponent,
    DrawerContainerComponent,
    SampleDrawerFormComponent,
    ActionMenuComponent,
    TicTacToeComponent,
    Covid19trackerComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [SpinnerService,
  {
    provide: HTTP_INTERCEPTORS,
    useFactory: (service: SpinnerService) => new HttpInterceptorService(service),
    multi: true,
    deps: [SpinnerService]
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
