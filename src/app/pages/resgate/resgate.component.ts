import { IAcoesData } from './../../model/IAcoesData';
import { IAcoes } from './../../model/IAcoes';
import { IInvestimento } from './../../model/IIvesntimento';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.scss']
})
export class ResgateComponent implements OnInit {

  dataRouter: IInvestimento
  columns: string[] = ['acao', 'saldoAcumulado', 'valorAResgatar'];
  data: IAcoesData[] = [];
  constructor(private _router: Router,) {
    this.dataRouter = this._router.getCurrentNavigation().extras as IInvestimento
  }

  ngOnInit() {
    this.dataRouter.acoes.map(data =>{

      this.data.push(
        {acao: data.nome,
        saldoAcumulado: this.getPercentagem(data.percentual)})
      console.log(this.data);

    })

  }

  getPercentagem(percent: number){
    return percent = (percent / 100) * this.dataRouter.saldoTotalDisponivel;
  }




}
