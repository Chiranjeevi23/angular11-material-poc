import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './components/sample/sample.component';
import { TicTacToeComponent } from './components/tic-tac-toe/tic-tac-toe.component';


const routes: Routes = [
  {path: 'sample', component: SampleComponent},
  {path: '', redirectTo: 'sample', pathMatch: 'full'},
  {path: 'ttt', component: TicTacToeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
