import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function valorAcimaValidator(control: AbstractControl, valorPadrao): { [key: string]: boolean } | null {

//   if (control.value !== undefined && ( control.value > valorPadrao )) {
//       return { 'valorMaior': true };
//   }
//   return null;
// }

export function valorAcimaValidator(valorPadrao: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && ( control.value > valorPadrao )) {
      return { 'valorMaior': true };
  }
  return null;
  };
}
