import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.scss']
})
export class ResgateComponent implements OnInit {

  constructor(private _router: Router,) {
    console.log(this._router.getCurrentNavigation());
  }

  ngOnInit() {
    console.log(this._router.getCurrentNavigation());

  }

}
