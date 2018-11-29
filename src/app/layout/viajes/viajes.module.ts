import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesComponent } from './viajes.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [CommonModule, ViajesRoutingModule, PageHeaderModule],
  declarations: [ViajesComponent]
})
export class ViajesModule { }
