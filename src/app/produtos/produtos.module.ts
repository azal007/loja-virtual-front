import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule, routedComponents } from './produtos-routing.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    routedComponents,
  ],
  imports: [
    ProdutosRoutingModule,
    CommonModule,
//    FormsModule,
//    RouterModule,
    
  ],
  providers: [HttpClient]
})
export class ProdutosModule { }
