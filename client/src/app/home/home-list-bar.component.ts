import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarService } from '../core/services/bar.service';


@Component({
  selector: 'home-list-bar',
  templateUrl: './home-list-bar.component.html',
})
export class HomeListComponent implements OnInit {
  @Input("bar") bar:any;

    constructor() {}
    ngOnInit() {

    }
  }
