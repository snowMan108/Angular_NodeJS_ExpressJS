import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProductComponent } from './product/product.component';
console.log("approutingmodule");
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  // {
  //   path: 'product',
  //   component: ProductComponent
  // },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./shared/product/product.module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: QuicklinkStrategy,
      relativeLinkResolution: 'legacy'
    })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
