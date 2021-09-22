import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './models/productModel';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent implements OnInit {
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private cd: ChangeDetectorRef,
      private prodToCreate: FormGroup,
      private fb: FormBuilder
      ) {
        this.prodToCreate = this.fb.group({
          id: [''],
          nom: ['', Validators.required],
          categoria:['', Validators.required],
          descr:['', Validators.maxLength(1000)],
          preu:['', Validators.required],
          id_bar:['', Validators.required],
  
        })
     }

  // descr: {
  //     type: String,
  //     required: true,
  // },
  // id_cat: {
  //     type: String,
  //     required: true,
  // },
  // preu: {
  //     type: Number,
  //     required: true,
  // },
  // stock: {
  //     type: Boolean,
  //     required: true,
  // }
    ngOnInit() {
      console.log("asdasdzz");
    }
  
  }