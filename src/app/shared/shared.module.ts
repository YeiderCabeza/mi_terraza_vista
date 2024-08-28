import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
