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
  getBars(cat: string,nom: string,ciutat: string, totalBars: number): Observable<any> {
    return this.apiService.get('bar/'+cat+'/'+nom+'/'+ciutat+'/'+totalBars)
  }
  getAllCategories(): Observable<[Categorie]> {
    return this.apiService.get('bar/categories/100');
  }
}
