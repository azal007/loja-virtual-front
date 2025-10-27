import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, UsuariosRoutingModule } from './usuarios-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    routedComponents,
  ],
  imports: [
    UsuariosRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class UsuariosModule { }
