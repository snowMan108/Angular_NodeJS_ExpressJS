import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list-bar.component';
import { HomeSearchComponent } from './home-search-bar.component';
import {
  Star,
  ClipboardList,
  QrCode,
  Search,
  Tag,
  Map
} from 'lucide-angular'
@NgModule({
  declarations: [
    HomeListComponent,
    HomeSearchComponent
  ],
  exports: [
    HomeListComponent,
    HomeSearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LucideAngularModule.pick({
      Star,
      ClipboardList,
      QrCode,
      Search,
      Tag,
      Map
    })
  ]
})
export class HomeModule { }
