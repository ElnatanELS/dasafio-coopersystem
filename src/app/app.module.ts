import { ResgateComponent } from './pages/resgate/resgate.component';
import { TableComponent } from './components/table/table.component';
import { ListInvestimentoComponent } from './pages/list-investimento/list-investimento.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material-module/material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListInvestimentoComponent,
    TableComponent,
    ResgateComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
