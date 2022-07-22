import { AfterContentChecked, Component, OnInit } from '@angular/core';

import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked{

  currencies: any = [];
  usdRate: any;
  eurRate: any;
  usd: any;
  eur: any;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getCurrencies()
    .subscribe(data => this.currencies = data);
  }

  ngAfterContentChecked() {
    this.usdRate = this.currencies.filter((curr: { cc: string; }) => curr.cc === "USD");
    this.eurRate = this.currencies.filter((curr: { cc: string; }) => curr.cc === "EUR");
    this.usd = this.usdRate[0].rate;
    this.eur = this.eurRate[0].rate;
  }
}
