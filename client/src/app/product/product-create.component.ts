import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from './models/productModel';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent implements OnInit {
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private cd: ChangeDetectorRef
    ) {}
    
    ngOnInit() {
      console.log("asdasdzz");
    }
  
  }