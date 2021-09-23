import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create.component'
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductCreateComponent
  ],
  exports: [
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
