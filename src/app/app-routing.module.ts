import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then(x => x.LayoutModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./features/usuario/usuario.module').then(m => m.UsuarioModule) // Carga perezosa del módulo Feature1
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
