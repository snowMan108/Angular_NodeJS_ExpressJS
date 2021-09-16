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
  prodToCreate: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductService,
    private aRouter: ActivatedRoute) {
      this.prodToCreate = this.fb.group({
        id: [''],
        nom: ['', Validators.required],
        categoria:['', Validators.required],
        desc:['', Validators.maxLength(60)],
        preu:['', Validators.required],
        idbar:['', Validators.required],

      })
      this.id = this.aRouter.snapshot.paramMap.get('id')
     }


  ngOnInit(): void {
  }
  getProduct(idToSearch?: any) {
    if (idToSearch != undefined) {
      this.id = (<HTMLInputElement>document.getElementById("idToSearch")).value;
    } else {
      this.id = this.aRouter.snapshot.paramMap.get('id')
    }
    console.log(this.id);
    this._productoService.getProduct(this.id).subscribe(data => {
      this.nom = data.nom;
      this.prodToCreate.setValue({
        id:data._id,
        nom: data.nom,
        categoria: data.categoria,
        preu:data.preu,
        idbar: data.idbar,
        desc:data.desc
      }) 
    })
  }
  actProd() {
    var edProd: Product = {
      nom: this.prodToCreate.get('nom')?.value,
      categoria: this.prodToCreate.get('categoria')?.value,
      desc: this.prodToCreate.get('desc')?.value,
      preu: this.prodToCreate.get('preu')?.value,
      idbar: this.prodToCreate.get('idbar')?.value
    }
      this._productoService.editarProduct(this.id,edProd)
  }
}


