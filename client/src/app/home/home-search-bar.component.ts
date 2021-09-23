import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home-search-bar',
  templateUrl: './home-search-bar.component.html',
})
export class HomeSearchComponent implements OnInit {
    constructor() {}
    ngOnInit() {
      console.log("dins del component homesearch")
    }

  }
