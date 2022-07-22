import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrencies() {
    return this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json');
  };
}
