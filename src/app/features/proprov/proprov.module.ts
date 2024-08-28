import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprovRoutingModule } from './proprov-routing.module';
import { ProprovComponent } from './component/proprov.component';


@NgModule({
  declarations: [
    ProprovComponent
  ],
  imports: [
    CommonModule,
    ProprovRoutingModule
  ]
})
export class ProprovModule { }
