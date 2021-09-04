import { IAcoes } from './IAcoes';
export interface IInvestimento {
  nome: string;
  objetivo: string;
  saldoTotalDisponivel: number;
  indicadorCarencia: string;
  acoes: IAcoes[];
}
