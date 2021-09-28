import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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
    totalBars =  10;
    @ViewChild('inputCiutat') inCiu!: ElementRef;
    @ViewChild('inputNom') inNom!: ElementRef;
    @ViewChild('inputCat') inCat!: ElementRef;


    arrCatego!: [Categorie];
    constructor(
      private cd: ChangeDetectorRef,
      // private totalBars: 10,
      private router: Router,
      private BarService: BarService,
    ) {}


    ngAfterViewInit() {

      this.BarService.getAllCategories().subscribe((categos) => {
        this.arrCatego = categos
        console.log(this.arrCatego)
      })
      this.getBars()

    }
    ngOnInit() {
      console.log("dins del component homesearch");
      // this.getall()
      // console.log(this.arrBars);
    }
    loadMore() {
      this.totalBars += 10;
      this.getBars()
    }
    getBars() {
      if (this.inCat.nativeElement.value == '') {
        var enviarCat = "no-param"
      } else {
        var enviarCat: string = this.inCat.nativeElement.value
      }
      if (this.inNom.nativeElement.value == '') {
        var enviarNom = "no-param"
      } else {
        var enviarNom: string = this.inNom.nativeElement.value
      }
      if (this.inCiu.nativeElement.value == '') {
        var enviarCiu = "no-param"
      } else {
        var enviarCiu: string = this.inCiu.nativeElement.value
      }
      this.BarService.getBars(enviarCat,enviarNom,enviarCiu,this.totalBars).subscribe((bars) => {
          this.arrBars = bars
          const seen = new Set();
          this.arrBars = bars.filter((el: { id: string; }) => {
            const duplicate = seen.has(el.id);
            seen.add(el.id);
            return !duplicate;
          });
          console.log(this.arrBars);
        })
    }


  }


