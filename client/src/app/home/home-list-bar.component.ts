import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
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
