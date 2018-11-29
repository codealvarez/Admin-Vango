import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { VerrutaRoutingModule } from './verruta-routing.module';
import { VerrutaComponent } from './verruta.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    VerrutaRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [VerrutaComponent]
})
export class VerrutaModule { }
