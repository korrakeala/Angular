import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = "Renata";
  genero: string = "femenino";

  invitacionMapa = {
    "masculino": "invitarlo",
    "femenino": "invitarla"
  }

  // i18nPlural
  clientes: string[] = ["Maria", "Pedro", "Hernando", "Eduardo", "Fernando"];
  clientesMapa = {
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    "other": "tenemos # clientes esperando."
  }
  cliReset: string[] = [];
  label: string = "Borrar cliente";

  cambiarCliente() {
    if (this.nombre === "Renata") {
      this.nombre = "Fernando";
      this.genero = "masculino";
    } else {
      this.nombre = "Renata";
      this.genero = "femenino";
    }
  }

  borrarCliente() {
    if (this.clientes.length > 0) {
      this.cliReset.unshift(this.clientes.pop()!);
      this.label = (this.clientes.length === 0) ? "Refrescar clientes" : "Borrar cliente";
    } else {
      this.clientes = this.cliReset;
      this.cliReset = [];
      this.label = "Borrar cliente";
    }
  }

  // KeyValue Pipe
  persona = {
    nombre: "Renata",
    edad: 35,
    direccion: "Buenos Aires, Argentina"
  }

  // Json Pipe
  heroes = [
    {
      nombre: "Superman",
      vuela: true
    },
    {
      nombre: "Robin",
      vuela: false
    },
    {
      nombre: "Aquaman",
      vuela: false
    }
  ];

  // Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500 );
  });

}
