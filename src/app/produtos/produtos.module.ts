import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutosRoutingModule, routedComponents } from './produtos-routing.module';

@NgModule({
  declarations: [
//    ...routedComponents,
  ],
  imports: [
    ProdutosRoutingModule,
    CommonModule,
    FormsModule,
    BrowserModule,
//    RouterModule,
  ],
})
export class ProdutosModule { }
