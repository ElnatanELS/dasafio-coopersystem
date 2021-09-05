import { CurrencyPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-resgate',
  templateUrl: './dialog-resgate.component.html',
  styleUrls: ['./dialog-resgate.component.scss']
})
export class DialogResgateComponent implements OnInit {

  indexError:number;
  title: string = "RESGATE EFETUADO COM SUCESSO!"
  conteudo: string = "O valor solicitado estará em sua conta em até 5 dias úteis."
  buttonDisbled = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private currencyPipe:CurrencyPipe,) {

  }

  ngOnInit() {
    if (this.data.erro) {

      this.title = "ERRO NO RESGATE"
      this.conteudo = this.data.erro
      this.buttonDisbled = false
    } else {
      this.indexError = this.data.controls.controls.findIndex(data => {
        console.log(data);
        return data.status === "INVALID"

      });
      this.isError(this.indexError);

    }

  }

  isError(index){
    if (index >= 0) {
      this.title = "ERRO NO RESGATE"
      this.conteudo = `${this.data.rows[index].acao} com valor de resgate maior que ${this.currencyPipe.transform(this.data.rows[index].saldoAcumulado,'BRL')}`
      this.buttonDisbled = false

    }
  }




}
