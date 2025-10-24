import { NgModule }                                from '@angular/core';
import { HttpClient }                              from '@angular/common/http';
import { FormsModule }                             from '@angular/forms';
import { CommonModule }                            from '@angular/common';

import { ProdutosRoutingModule, routedComponents } from './produtos-routing.module';

@NgModule({
  declarations: [
    routedComponents,
  ],
  imports: [
    ProdutosRoutingModule,
    CommonModule,
    FormsModule,
//    RouterModule,
    
  ],
  providers: [HttpClient]
})
export class ProdutosModule { }
