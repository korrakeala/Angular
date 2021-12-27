import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'renata';
  nombreUpper: string = 'RENATA';
  nombreCompleto: string = 'reNata maNsiLla';

  fecha: Date = new Date(); // el día de hoy


}
