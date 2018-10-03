import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerrutaRoutingModule } from './verruta-routing.module';
import { VerrutaComponent } from './verruta.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    VerrutaRoutingModule,
    PageHeaderModule
  ],
  declarations: [VerrutaComponent]
})
export class VerrutaModule { }
