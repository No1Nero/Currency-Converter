import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent {
  @Input() currencies: any;

  firstCurrencyType = 'UAH';
  secondCurrencyType = 'USD';
  firstCurrencyValue = 1;
  secondCurrencyValue = 1;

  
  convertFirst() {
    if (this.firstCurrencyType === "UAH" && this.secondCurrencyType === "UAH") {
      this.secondCurrencyValue = this.firstCurrencyValue;
    } else if (this.firstCurrencyType === "UAH") {
      let compare = this.currencies.filter((curr: { cc: string; }) => curr.cc === this.secondCurrencyType);
      this.secondCurrencyValue = this.firstCurrencyValue * (compare[0].rate / 1000);
    } else if (this.secondCurrencyType === "UAH") {
      let compare = this.currencies.filter((curr: { cc: string; }) => curr.cc === this.firstCurrencyType);
      this.secondCurrencyValue = this.firstCurrencyValue * compare[0].rate;
    } else {
      let compareFirst = 
    }
  }

  convertSecond() {}
}
