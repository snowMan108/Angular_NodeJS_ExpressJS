import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

    getProducts(): Observable<any> {
      return this.http.get(environment.url);
    }

    eliminarProducts(id: string):Observable<any> {
      return this.http.delete(environment.url + id);
    }

    guardarProducts(producto: Product):Observable<any> {
      return this.http.post(environment.url, producto);
    }

    getProduct(id: string):Observable<any> {
      return this.http.get(environment.url + id);
    }

    editarProduct(id: string, producto: Product):Observable<any> {
      return this.http.put(environment.url + id, producto);
    }

  }
