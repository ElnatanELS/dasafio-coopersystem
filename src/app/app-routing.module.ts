import { ResgateComponent } from './pages/resgate/resgate.component';
import { ListInvestimentoComponent } from './pages/list-investimento/list-investimento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListInvestimentoComponent, data: { title: 'Investimentos'} },
  { path: 'resgate', component: ResgateComponent, data: { title: 'Resgate'}  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
