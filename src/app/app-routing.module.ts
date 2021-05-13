import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Covid19trackerComponent } from './components/covid19tracker/covid19tracker.component';
import { IndiaMapComponent } from './components/india-map/india-map.component';
import { OverlaySidenavComponent } from './components/overlay-sidenav/overlay-sidenav.component';
import { SampleComponent } from './components/sample/sample.component';


const routes: Routes = [
  {path: 'sample', component: SampleComponent},
  {path: 'map', component: IndiaMapComponent},
  {path: 'covid', component: Covid19trackerComponent},
  {path: 'overlay-sidenav', component: OverlaySidenavComponent},
  {path: '', redirectTo: 'sample', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
