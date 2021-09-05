import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  exports : [
    MatToolbarModule,
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
