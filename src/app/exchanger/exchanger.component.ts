import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
  styleUrls: ['./exchanger.component.css']
})
export class ExchangerComponent {
  @Input() currencies: any;

  firstCurrencyType = 'UAH';
  secondCurrencyType = 'UAH';
  firstCurrencyValue = 1;
  secondCurrencyValue = 1;

  
  convertFirst() {
    if (this.firstCurrencyType === "UAH" && this.secondCurrencyType === "UAH") {
      this.secondCurrencyValue = this.firstCurrencyValue;
    } else if (this.firstCurrencyType === "UAH") {
      let compare = this.currencies.filter((curr: { cc: string; }) => curr.cc === this.secondCurrencyType);
      this.secondCurrencyValue = this.firstCurrencyValue / compare[0].rate;
    } else if (this.secondCurrencyType === "UAH") {
      let compare = this.currencies.filter((curr: { cc: string; }) => curr.cc === this.firstCurrencyType);
      this.secondCurrencyValue = this.firstCurrencyValue * compare[0].rate;
    } else {
      let compareFirst = this.currencies.filter((curr: { cc: string; }) => curr.cc === this.firstCurrencyType);
      let compareSecond = this.currencies.filter((curr: { cc: string; }) => curr.cc === this.secondCurrencyType);
      this.secondCurrencyValue = this.firstCurrencyValue * (compareFirst[0].rate / compareSecond[0].rate);
    }
  }

  convertSecond() {
    if (this.firstCurrencyType === "UAH" && this.secondCurrencyType === "UAH") {
      this.firstCurrencyValue = this.secondCurrencyValue;
    } else if (this.secondCurrencyType === "UAH") {
      let compare = this.currencies.filter((curr: { cc: string; }) => curr.cc === this.firstCurrencyType);
      this.firstCurrencyValue = this.secondCurrencyValue / compare[0].rate;
    } else if (this.firstCurrencyType === "UAH") {
      let compare = this.currencies.filter((curr: { cc: string; }) => curr.cc === this.secondCurrencyType);
      this.firstCurrencyValue = this.secondCurrencyValue * compare[0].rate;
    } else {
      let compareFirst = this.currencies.filter((curr: { cc: string; }) => curr.cc === this.firstCurrencyType);
      let compareSecond = this.currencies.filter((curr: { cc: string; }) => curr.cc === this.secondCurrencyType);
      this.firstCurrencyValue = this.secondCurrencyValue * (compareSecond[0].rate / compareFirst[0].rate);
    }
  }
}
