import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Covid19trackerComponent } from './components/covid19tracker/covid19tracker.component';
import { SampleComponent } from './components/sample/sample.component';


const routes: Routes = [
  {path: 'sample', component: SampleComponent},
  {path: 'covid', component: Covid19trackerComponent},
  {path: '', redirectTo: 'covid', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
