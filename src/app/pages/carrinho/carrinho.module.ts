import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { HttpClient } from '@angular/common/http';
import { CarrinhoComponent } from './carrinho.component';


@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CarrinhoRoutingModule,
    CommonModule,
  ],
  providers: [HttpClient]
})
export class CarrinhoModule { }
