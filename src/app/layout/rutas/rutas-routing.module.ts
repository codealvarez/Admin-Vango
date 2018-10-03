import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutasComponent } from './rutas.component';

const routes: Routes = [
    {
        path: '', component: RutasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RutasRoutingModule {
}
