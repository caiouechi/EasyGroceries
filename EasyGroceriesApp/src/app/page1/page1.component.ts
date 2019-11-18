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
  logResult = '';
  PriceA: number = 0;
  QuantityA: number = 0;
  PriceB: number = 0;
  QuantityB: number = 0;
  valorRandomico: number = 3;

  Compare() {
    var priceA = parseFloat(this.txtPriceA.value);
    var quantityA = parseFloat(this.txtQuantityA.value);
    var totalA = (priceA / quantityA);

    var priceB = parseFloat(this.txtPriceB.value);
    var quantityB = parseFloat(this.txtQuantityB.value);
    var totalB = (priceB * quantityB);

    if (totalA > totalB) {
      var difference = totalA - totalB;
      this.clickMessage = "Price B is cheaper. You will save " + difference.toFixed(2) + " per unit";
    } else if (totalA < totalB) {
      var difference = totalB - totalA;
      this.clickMessage = "Price A is cheaper. You will save " + difference.toFixed(2) + " per unit";
    } else {
      this.clickMessage = "They are the same";
    }
  }

  Clear() {
    this.cleanMessage();
  }

  cleanMessage() {
    this.clickMessage = null;
    this.logResult = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
