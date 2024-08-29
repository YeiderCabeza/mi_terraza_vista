import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagoComponent } from './component/pago.component'; 

const routes: Routes = [
  {
    path: '',
    component: PagoComponent, // Componente principal para la característica
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoRoutingModule { }





