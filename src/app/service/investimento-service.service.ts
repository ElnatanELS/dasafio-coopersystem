import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {

constructor(private http: HttpClient) { }

urlInvestimento = 'http://www.mocky.io/v2/5e76797e2f0000f057986099';

getInvestimentos() {
  return this.http.get(this.urlInvestimento);
}

}
