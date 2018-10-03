import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerrutaComponent } from './verruta.component';

const routes: Routes = [
	{
        path: '', component: VerrutaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerrutaRoutingModule { }
