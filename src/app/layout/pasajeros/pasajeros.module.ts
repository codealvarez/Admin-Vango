import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasajerosRoutingModule } from './pasajeros-routing.module';
import { PasajerosComponent } from './pasajeros.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    PasajerosRoutingModule,
    PageHeaderModule
  ],
  declarations: [PasajerosComponent]
})
export class PasajerosModule { }
