import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-resgate',
  templateUrl: './dialog-resgate.component.html',
  styleUrls: ['./dialog-resgate.component.scss']
})
export class DialogResgateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
