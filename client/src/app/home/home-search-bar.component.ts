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
    totalBars = 9;
    @ViewChild('inputCiutat') inCiu!: ElementRef;
    @ViewChild('inputNom') inNom!: ElementRef;
    @ViewChild('inputCat') inCat!: ElementRef;
    @ViewChild('btLoadMore') btLoadMore!: ElementRef;

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
      this.getBars(false)

    }
    ngOnInit() {
      // console.log("dins del component esearch");
      // this.getall()
      // console.log(this.arrBars);
    }
    loadMore() {
      this.totalBars += 9;
      this.getBars(true)
    }
    resSearch(algo: String){
      console.log(algo)
      this.inCat.nativeElement.value=algo
      // FALTA FICAR EL ONCHANGE DEL CAT I FER QUE FUNCIONE
      this.inNom.nativeElement.value=""
      this.inCiu.nativeElement.value=""

    }
    getBars(keepalive: boolean) {
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
        console.log(bars)
        if (bars != null){
          if (bars.length < 9) {
            this.btLoadMore.nativeElement.remove()
          }
          if (this.arrBars == undefined){
              this.arrBars = bars
            } else {
              if (keepalive) {
                this.arrBars = [...this.arrBars, ...bars]
              } else {
                this.arrBars = bars;
              }
          }
        }
      })
    }


  }


