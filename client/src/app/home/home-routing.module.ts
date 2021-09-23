import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeListComponent } from './home-list-bar.component';
import { HomeComponent } from './home.component';
import { HomeSearchComponent } from './home-search-bar.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // resolve: {
    //   profile: ProfileResolver
    // },
    children: [
      {
        path: '',
        component: HomeListComponent
      },
      {
        path: '',
        component: HomeSearchComponent
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
