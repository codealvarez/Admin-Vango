import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearrutaComponent } from './crearruta.component';

const routes: Routes = [
	{
        path: '', component: CrearrutaComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearrutaRoutingModule { }
