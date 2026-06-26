import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idade'
})
export class IdadePipe implements PipeTransform {

  transform(value: string | Date): string {
    if (!value) { return ''; }

    let nascimento: Date;

    if (typeof value === 'string') {
      const partes = value.split('-');

      nascimento = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
    } else {
      nascimento = value;
    }

    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }

    return idade + ' anos';
  }
}
