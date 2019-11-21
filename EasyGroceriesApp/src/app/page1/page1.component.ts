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
  txtMultiplyA = new FormControl('');
  txtMultiplyB = new FormControl('');

  clickMessage = '';
  logResult = '';
  PriceA: number = 0;
  QuantityA: number = 0;
  MultiplyA: number = 0;

  PriceB: number = 0;
  QuantityB: number = 0;
  MultiplyB: number = 0;

  valorRandomico: number = 3;

  Compare() {
    var priceA = parseFloat(this.txtPriceA.value);
    var quantityA = parseFloat(this.txtQuantityA.value);
    var MultiplyA = parseFloat(this.txtMultiplyA.value);
    var totalA = (priceA / quantityA);
    if (MultiplyA > 0) {
      totalA = totalA / MultiplyA
    }

    var priceB = parseFloat(this.txtPriceB.value);
    var quantityB = parseFloat(this.txtQuantityB.value);
    var MultiplyB = parseFloat(this.txtMultiplyB.value);
    var totalB = (priceB / quantityB);
    if (MultiplyB > 0) {
      totalB = totalB / MultiplyB
    }

    if (totalA > totalB) {
      var difference = totalA - totalB;
      this.clickMessage = "Price B is cheaper. You will save " + difference.toFixed(2) + " per volume";
    } else if (totalA < totalB) {
      var difference = totalB - totalA;
      this.clickMessage = "Price A is cheaper. You will save " + difference.toFixed(2) + " per volume";
    } else {
      this.clickMessage = "They are the same";
    }
  }

  Clear() {
    this.cleanMessage()
    this.cleanInputs()
  }

  cleanInputs() {
    this.txtPriceA = new FormControl('');
    this.txtPriceB = new FormControl('');
    this.txtQuantityA = new FormControl('');
    this.txtQuantityB = new FormControl('');
    this.txtMultiplyA = new FormControl('');
    this.txtMultiplyB = new FormControl('');
  }

  cleanMessage() {
    this.clickMessage = null;
    this.logResult = null;
  }

  constructor() { }
  ngOnInit() {
  }
}
