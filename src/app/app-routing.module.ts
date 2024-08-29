import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodegaModule } from './features/bodega/bodega.module';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
{
    path: '',
    component: LayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layout/layout.module').then(x=>x.LayoutModule)
  }]},
  {
    path: 'usuario',
    loadChildren: () => import('./features/usuario/usuario.module').then(m => m.UsuarioModule) // Carga perezosa del módulo Feature1
  },
  {
    path: 'bodega',
    loadChildren: () => import('./features/bodega/bodega.module').then(m => m.BodegaModule) // Carga perezosa del módulo Feature1
  },
  {
    path :'pago',
    loadChildren: () => import('./features/pago/pago.module').then(m => m.PagoModule)
  },
  // {
  //   path: 'shared',
  //   loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) // Carga perezosa del módulo Feature1
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
