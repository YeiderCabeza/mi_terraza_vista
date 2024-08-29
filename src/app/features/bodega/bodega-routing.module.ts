import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodegaComponent } from './component/bodega.component';

const routes: Routes = [
  {
    path: '',
    component: BodegaComponent, // Componente principal para la característica
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodegaRoutingModule { }

