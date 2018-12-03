import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'rutas', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'rutas', loadChildren: './rutas/rutas.module#RutasModule' },
            { path: 'viajes', loadChildren: './viajes/viajes.module#ViajesModule' },
            { path: 'viajes/:idRuta', loadChildren: './viajes/viajes.module#ViajesModule' }, 
            { path: 'crearruta', loadChildren: './crearruta/crearruta.module#CrearrutaModule' },
            { path: 'verruta', loadChildren: './verruta/verruta.module#VerrutaModule' },
            { path: 'verruta/:idRuta', loadChildren: './verruta/verruta.module#VerrutaModule' }, 
            { path: 'conductores', loadChildren: './conductores/conductores.module#ConductoresModule' },
            { path: 'conductores/:placa', loadChildren: './conductores/conductores.module#ConductoresModule' },
            { path: 'pasajeros', loadChildren: './pasajeros/pasajeros.module#PasajerosModule' },
            { path: 'pasajeros/:idViaje', loadChildren: './pasajeros/pasajeros.module#PasajerosModule' },
            { path: 'pasajero/:idPasajero', loadChildren: './pasajero/pasajero.module#PasajeroModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
