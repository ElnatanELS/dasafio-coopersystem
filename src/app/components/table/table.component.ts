import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IInvestimento } from 'src/app/model/IIvesntimento';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: IInvestimento[] = [
  {
    "nome": "INVESTIMENTO I",
    "objetivo": "Minha aposentadoria",
    "saldoTotalDisponivel": 39321.29,
    "indicadorCarencia": "N",
    "acoes": [
      {
        "id": "1",
        "nome": "BBAS3",
        "percentual": 28.1
      },
      {
        "id": "2",
        "nome": "VALE3",
        "percentual": 20.71
      },
      {
        "id": "3",
        "nome": "PETR4",
        "percentual": 21.63
      },
      {
        "id": "4",
        "nome": "CMIG3",
        "percentual": 12.41
      },
      {
        "id": "5",
        "nome": "OIBR3",
        "percentual": 17.15
      }
    ]
  },
  {
    "nome": "INVESTIMENTO II",
    "objetivo": "Viajem dos sonhos",
    "saldoTotalDisponivel": 7300,
    "indicadorCarencia": "N",
    "acoes": [
      {
        "id": "1",
        "nome": "BBAS3",
        "percentual": 35.81
      },
      {
        "id": "2",
        "nome": "VALE3",
        "percentual": 26.42
      },
      {
        "id": "3",
        "nome": "PETR4",
        "percentual": 37.77
      }
    ]
  },
  {
    "nome": "INVESTIMENTO III",
    "objetivo": "Abrir meu próprio negócio",
    "saldoTotalDisponivel": 26000,
    "indicadorCarencia": "N",
    "acoes": [
      {
        "id": "1",
        "nome": "BBAS3",
        "percentual": 41.1
      },
      {
        "id": "2",
        "nome": "VALE3",
        "percentual": 22.43
      },
      {
        "id": "3",
        "nome": "PETR4",
        "percentual": 26.12
      },
      {
        "id": "5",
        "nome": "OIBR3",
        "percentual": 10.35
      }
    ]
  },
  {
    "nome": "INVESTIMENTO IV",
    "objetivo": "Investimento em carencia",
    "saldoTotalDisponivel": 44000,
    "indicadorCarencia": "S",
    "acoes": [
      {
        "id": "1",
        "nome": "BBAS3",
        "percentual": 41.1
      },
      {
        "id": "2",
        "nome": "VALE3",
        "percentual": 22.43
      },
      {
        "id": "3",
        "nome": "PETR4",
        "percentual": 26.12
      },
      {
        "id": "5",
        "nome": "OIBR3",
        "percentual": 10.35
      }
    ]
  }
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['nome', 'objetivo', 'saldoTotalDisponivel'];
  dataSource = ELEMENT_DATA;

  goToResgate(row){
    this._router.navigate(['resgate'], { ...row});

  }

}
