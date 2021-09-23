import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarService } from '../core/services';
@Component({
  selector: 'home-search-bar',
  templateUrl: './home-search-bar.component.html',
})
export class HomeSearchComponent implements OnInit {
    arrBars!: any[];
    constructor(
      private router: Router,
      private BarService: BarService,
    ) {}
    ngOnInit() {
      console.log("dins del component homesearch");
      this.BarService.getAll()
    .subscribe(bars =>
      this.arrBars = bars);
      console.log(this.arrBars);

    }



  }
