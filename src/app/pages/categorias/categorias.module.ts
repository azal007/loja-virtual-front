import { NgModule }                                from '@angular/core';
import { HttpClient }                              from '@angular/common/http';
import { FormsModule }                             from '@angular/forms';
import { CommonModule }                            from '@angular/common';

import { CategoriasRoutingModule, routedComponents } from './categorias-routing.module';

@NgModule({
  declarations: [
    routedComponents,
  ],
  imports: [
    CategoriasRoutingModule,
    CommonModule,
    FormsModule
],
  providers: [HttpClient]
})
export class CategoriasModule { }
