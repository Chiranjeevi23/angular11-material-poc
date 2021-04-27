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

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    DrawerFormDirective,
    DrawerComponent,
    DrawerContainerComponent,
    SampleDrawerFormComponent,
    ActionMenuComponent,
    TicTacToeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  entryComponents:[SampleDrawerFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
