import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarService } from '../core/services';
@Component({
  selector: 'home-search-bar',
  templateUrl: './home-search-bar.component.html',
})
export class HomeSearchComponent implements OnInit, AfterViewInit {
    arrBars!: any[];
    constructor(
      private cd: ChangeDetectorRef,

      private router: Router,
      private BarService: BarService,
    ) {}

    ngAfterViewInit() {
      this.BarService.getAll().subscribe((bars) => {
        this.arrBars = bars
        console.log(this.arrBars);
      })
    }
    ngOnInit() {

      console.log("dins del component homesearch");
      // this.getall()
      // console.log(this.arrBars);
    }




  }


