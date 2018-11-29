import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConductoresRoutingModule } from './conductores-routing.module';
import { ConductoresComponent } from './conductores.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule,
    ConductoresRoutingModule,
    PageHeaderModule
  ],
  declarations: [ConductoresComponent]
})
export class ConductoresModule { }
