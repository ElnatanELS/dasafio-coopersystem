import { DialogResgateComponent } from './../../pages/dialog-resgate/dialog-resgate.component';
import { ResgateComponent } from './../../pages/resgate/resgate.component';
import { ListInvestimentoComponent } from './../../pages/list-investimento/list-investimento.component';
import { IAcoesData } from './../../model/IAcoesData';
import { TitleColumnEnum } from './../../../shared/enum/title-column-enum.enum';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IInvestimento } from 'src/app/model/IIvesntimento';
import { CurrencyPipe } from '@angular/common';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { valorAcimaValidator } from 'src/utils/valorAcimaValidator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  readonly titleColumnEnum = TitleColumnEnum;
  formsInput = new FormArray([]);
  disabledButton = false;


  @Input() data: IInvestimento[] | IAcoesData[];
  @Input() displayedColumns: String[];

  @Output() changeValue: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private _router: Router,
    private currencyPipe:CurrencyPipe,
    public dialog: MatDialog) { }


  ngOnInit() {
    this.data.forEach((data) => {

      this.formsInput.push(new FormControl('', [
        valorAcimaValidator(data.saldoAcumulado)]))

    })

  }

  ngAfterViewInit(){
    this.formsInput.valueChanges.subscribe(data => this.changeValue.emit(data)
    )
  }


  isValorAResgatar(value){
    this.disabledButton = true;
    return value === 'valorAResgatar';
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogResgateComponent, {data:
      {
        controls: this.formsInput,
        rows: this.data}});

    ;
  }

  log(te){
    console.log(te);

  }

}
