import { NgModule }                                from '@angular/core';
import { HttpClient }                              from '@angular/common/http';
import { FormsModule }                             from '@angular/forms';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { ProdutosRoutingModule, routedComponents } from './produtos-routing.module';

@NgModule({
  declarations: [
    routedComponents,
  ],
    imports: [
        ProdutosRoutingModule,
        CommonModule,
        FormsModule,
        NgOptimizedImage
    ],
  providers: [HttpClient]
})
export class ProdutosModule { }
