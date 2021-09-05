import { IAcoesData } from './../../model/IAcoesData';
import { TitleColumnEnum } from './../../../shared/enum/title-column-enum.enum';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IInvestimento } from 'src/app/model/IIvesntimento';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  readonly titleColumnEnum = TitleColumnEnum;

  @Input() data: IInvestimento | IAcoesData;
  @Input() displayedColumns: String[];

  constructor(private _router: Router,
    private currencyPipe:CurrencyPipe) { }

  ngOnInit() {

  }

  isNumber(){
    console.log();
    return false
  }




  goToResgate(row){
    this._router.navigate(['resgate'], { ...row});

  }

  returnValue(value){
    if (typeof(value) === 'string') {
      return value
    } else {
      return this.currencyPipe.transform(value,'BRL')
    }


  }

}
