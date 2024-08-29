import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { UsuarioComponent } from '../features/usuario/component/usuario.component';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class LayoutModule { }
