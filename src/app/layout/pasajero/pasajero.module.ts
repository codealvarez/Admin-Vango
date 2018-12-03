import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PasajeroRoutingModule } from './pasajero-routing.module';
import { PasajeroComponent } from './pasajero.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    PasajeroRoutingModule,
    PageHeaderModule
  ],
  declarations: [PasajeroComponent]
})
export class PasajeroModule { }
