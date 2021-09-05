import { IAcoesData } from './../../model/IAcoesData';
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
  valorTotalAResgatar:number = 0;
  constructor(private _router: Router,) {
    this.dataRouter = this._router.getCurrentNavigation().extras as IInvestimento
  }

  ngOnInit() {
    this.dataRouter.acoes.map(data =>{

      this.data.push(
        {acao: data.nome,
        saldoAcumulado: this.getPercentagem(data.percentual)})
    })

  }

  getPercentagem(percent: number){
    return percent = (percent / 100) * this.dataRouter.saldoTotalDisponivel;
  }

  valorTotal(event){
    this.valorTotalAResgatar = 0;
    console.log(event);
    for (let i=0; i<event.length;i++){
      console.log(event[i])
      if (event[i] !== '') {
        this.valorTotalAResgatar += parseInt(event[i])

      }
  }

    // event.forEach(valor => {
    //   console.log(valor);

    //   this.valorTotalAResgatar = this.valorTotalAResgatar + valor as number;
    // });
  }


}
