import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { BarService } from '../core';
@Component({
  selector: 'home-list-bar',
  templateUrl: './home-list-bar.component.html',
})
export class HomeListComponent implements OnInit {
  @Input("bar") bar:any;
  @Output() outCat = new EventEmitter<string>();
  totalStars = 5
  noStars! :Array<any>;
  stars! :Array<any>;


    constructor() {}
    ngOnInit() {
      this.noStars = Array(this.totalStars - this.bar.valoration).fill(0);
      this.stars = Array(this.bar.valoration).fill(1);
    }
    outputCat(cat:string) {
      this.outCat.emit(cat);
    }
  }
