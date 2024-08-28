import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './component/usuario.component';

const routes: Routes = [

  {
    path: '',
    component: UsuarioComponent, // Componente principal para la característica
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
