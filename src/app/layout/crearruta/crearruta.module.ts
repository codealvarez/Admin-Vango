import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearrutaRoutingModule } from './crearruta-routing.module';
import { CrearrutaComponent } from './crearruta.component';
import { PageHeaderModule } from './../../shared';
import { AgmCoreModule } from '@agm/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CrearrutaRoutingModule,
    PageHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBw13TAYsGCkJKhARjx9F70ymnIt_OnRXU'
    })
  ],
  declarations: [CrearrutaComponent]
})
export class CrearrutaModule { }
