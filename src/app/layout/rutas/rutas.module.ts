import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutasRoutingModule } from './rutas-routing.module';
import { RutasComponent } from './rutas.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [CommonModule, RutasRoutingModule, PageHeaderModule],
  declarations: [RutasComponent]
})
export class RutasModule { }
