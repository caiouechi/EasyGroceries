import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  txtPriceA = new FormControl('');
  txtPriceB = new FormControl('');
  txtQuantityA = new FormControl('');
  txtQuantityB = new FormControl('');

  clickMessage = '';
  PriceA : number = 0;
  QuantityA : number = 0;
  PriceB : number = 0;
  QuantityB : number = 0;
  valorRandomico : number = 3;

  Compare(){
     this.clickMessage = "Price A = " + this.txtPriceA.value + " Price B = " + this.txtPriceB.value;
  }

  Clear(){
    this.cleanMessage();
  }

  cleanMessage(){
    this.clickMessage = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
