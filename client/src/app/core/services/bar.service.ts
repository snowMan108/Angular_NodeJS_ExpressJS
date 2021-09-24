import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Categorie } from '../models/categories.model';
@Injectable({
  providedIn: 'root'
})
export class BarService {
  constructor (
    private apiService: ApiService
  ) {}

  getAllFrom(idbar: string): Observable<any> {
          return this.apiService.get('products/categories/'+idbar)
          // .pipe(map(data => {
          //   console.log(data);
          //   data.bars}));
  }
  getAllCategories(): Observable<[Categorie]> {
    return this.apiService.get('bar/categories/');
  }
}
