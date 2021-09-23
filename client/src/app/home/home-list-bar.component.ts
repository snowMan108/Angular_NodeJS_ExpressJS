import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home-list-bar',
  templateUrl: './home-list-bar.component.html',
})
export class HomeListComponent implements OnInit {
    constructor() {}
    ngOnInit() {
      console.log("asdasdzz");
    }

  }
