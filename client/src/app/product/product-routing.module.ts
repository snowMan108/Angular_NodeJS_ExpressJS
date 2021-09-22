import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product-create.component';
import { ProductComponent } from './product.component';
console.log("prrtg");
const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    // resolve: {
    //   profile: ProfileResolver
    // },
    children: [
      {
        path: '',
        component: ProductCreateComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
