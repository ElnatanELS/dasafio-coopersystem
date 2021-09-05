import { Component, OnInit } from '@angular/core';
import { IInvestimento } from 'src/app/model/IIvesntimento';
import { InvestimentoService } from 'src/app/service/investimento-service.service';

@Component({
  selector: 'app-list-investimento',
  templateUrl: './list-investimento.component.html',
  styleUrls: ['./list-investimento.component.scss']
})
export class ListInvestimentoComponent implements OnInit {

  constructor(private investimentoService :InvestimentoService)  { }
  data:any;
  columns: string[] = ['nome', 'objetivo', 'saldoTotalDisponivel'];

  ngOnInit() {
    this.investimentoService.getInvestimentos().subscribe((res: any) => {
      this.data = res.response.data.listaInvestimentos

    })
  }



}
