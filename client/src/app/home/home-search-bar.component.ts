import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarService } from '../core/services';
import { Categorie } from '../core/models/categories.model';
@Component({
  selector: 'home-search-bar',
  templateUrl: './home-search-bar.component.html',
})
export class HomeSearchComponent implements OnInit, AfterViewInit {
    arrBars!: any[];
    arrCatego!: [Categorie];
    constructor(
      private cd: ChangeDetectorRef,

      private router: Router,
      private BarService: BarService,
    ) {}

    ngAfterViewInit() {
      this.BarService.getAllFrom("id1").subscribe((bars) => {
        this.arrBars = bars
        console.log(this.arrBars);
      })
      this.BarService.getAllCategories().subscribe((categos) => {
        this.arrCatego = categos
        console.log(this.arrCatego)
      })
    }
    ngOnInit() {

      console.log("dins del component homesearch");
      // this.getall()
      // console.log(this.arrBars);
    }




  }


