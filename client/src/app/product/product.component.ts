import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from './models/productModel';
import { ProductService } from './services/productServices';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'Product';
  id: any;
  nom!: String;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductService,
    private aRouter: ActivatedRoute) {

      this.id = this.aRouter.snapshot.paramMap.get('id')
     }


  ngOnInit(): void {
  }
  getProduct() {
    this._productoService.getProduct(this.id).subscribe(data => {
      this.nom = data.nom;
    })
  }
}
